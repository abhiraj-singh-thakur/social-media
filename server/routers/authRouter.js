import express from "express";
import { signupController, loginController, logoutController, refreshAccessTokenController } from "../controllers/authController.js";

const router = express.Router();

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/logout', logoutController);
router.get('/refresh', refreshAccessTokenController);

export default router;

