const router = require("express").Router();
const {createPostController, likeAndUnlikePost, updatePostController, deletePostController, commentPostController} = require("../controllers/postController");
const requireUser = require("../middlewares/requireUser");

router.post("/", requireUser, createPostController);
router.post("/like", requireUser, likeAndUnlikePost);
router.put('/', requireUser, updatePostController);
router.put('/comment', requireUser, commentPostController);
router.delete('/', requireUser, deletePostController);

module.exports = router;
