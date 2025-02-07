import express from 'express';
import { followOrUnfollowUserController, getMyInfo, getPostsOfFollowing, getUserPosts, updateUserProfile, deleteMyProfile, getUserProfile, getMyPosts } from '../controllers/userController.js';
import requireUser from '../middlewares/requireUser.js';

const router = express.Router();

router.post('/follow', requireUser, followOrUnfollowUserController);
router.get('/getFeedData', requireUser, getPostsOfFollowing);
router.get('/getMyPosts', requireUser, getMyPosts);
router.get('/getUserPosts', requireUser, getUserPosts);
router.delete('/', requireUser, deleteMyProfile);
router.get('/getMyInfo', requireUser, getMyInfo);
router.put('/', requireUser, updateUserProfile);
router.post('/getUserProfile', requireUser, getUserProfile);

export default router;