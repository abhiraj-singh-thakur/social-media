import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    image: {
        publicId: String,
        url: String
    },
    caption: {
        type: String,
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }],
   comments: [{
        comment:{type: String},
        postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}
   }]
}, { timestamps: true });

const Post= mongoose.model('post', postSchema);
export default Post;