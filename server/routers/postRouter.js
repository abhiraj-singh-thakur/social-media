import express from "express";
import { createPostController, deletePostController, likeAndUnlikePost, updatePostController, commentPostController } from "../controllers/postController.js";
import  requireUser  from "../middlewares/requireUser.js";

const router = express.Router();

router.post("/", requireUser, createPostController);
router.post("/like", requireUser, likeAndUnlikePost);
router.put('/', requireUser, updatePostController);
router.put('/comment', requireUser, commentPostController);
router.delete('/', requireUser, deletePostController);

export default router;
