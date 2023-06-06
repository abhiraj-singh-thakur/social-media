const router = require('express').Router();
const {
    signupController,
    loginController,
    logoutController,
    refreshAccessTokenController
} = require("../controllers/authController");

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/logout', logoutController);
router.get('/refresh', refreshAccessTokenController);

module.exports = router;