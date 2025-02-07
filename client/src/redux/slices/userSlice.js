import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {axiosClient} from "../../utils/axiosClient";
import {getUserProfile, likeAndUnlikePost} from "./postsSlice";


export const getMyPosts = createAsyncThunk(
    "user/getMyPosts",
    async (_)=>{
        try {
            const response = await axiosClient.get(
                "/user/getMyPosts"
            );
            console.log("User Posts:", response);
        }catch (e) {
            return Promise.reject(e);
        }
    }
)
const getMyPostsSlice = createSlice({
    name: "getMyPostsSlice",
    initialState: {
        userPost: {},
    },
    extraReducers: (builder) => {
        builder
            .addCase(getMyPosts.fulfilled,(state,action)=>{
                state.userPost = action.payload;
            })
    },
});

export default getMyPostsSlice.reducer;