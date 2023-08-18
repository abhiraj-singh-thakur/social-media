import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosClient } from "../../utils/axiosClient";
import { likeAndUnlikePost } from "./postsSlice";

export const getFeedData = createAsyncThunk(
    "user/getFeedData",
    async () => {
        try {
            const response = await axiosClient.get("/user/getFeedData");
            console.log("userProfile", response.message);
            return response.message;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

export const followAndUnfollowUser = createAsyncThunk(
    "user/followAndUnfollow",
    async (body) => {
        try {
            const response = await axiosClient.post("/user/follow", body);
            console.log("followAndUnfollowUser:", response.message);
            return response.message.user;
        } catch (error) {
            return Promise.reject(error);
        }
    }
);

const feedSlice = createSlice({
    name: "feedSlice",
    initialState: {
        feedData: {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(getFeedData.fulfilled, (state, action) => {
                state.feedData = action.payload;
            })
            .addCase(likeAndUnlikePost.fulfilled, (state, action) => {
                const post = action.payload;

                const index = state?.feedData?.posts?.findIndex(
                    (item) => item._id === post._id
                );
                // console.log("feed data:", state.feedData.posts);
                // console.log("feed like", post, index);
                if (index !== undefined && index !== -1) {
                    state.feedData.posts[index] = post;
                }
            })
            .addCase(followAndUnfollowUser.fulfilled, (state, action) => {
                const user = action.payload;
                const index = state?.feedData?.following.findIndex(item => item._id === user._id);
                if(index !== -1) {
                    state?.feedData.following.splice(index, 1);
                } else {
                    state?.feedData.following.push(user);
                }
            })
    },
});

export default feedSlice.reducer;
