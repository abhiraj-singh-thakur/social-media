import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cloudinary from 'cloudinary';
import cors from 'cors';


import dbConnect from './dbConnect.js';
import authRouter from './routers/authRouter.js';
import postRouter from './routers/postRouter.js';
import userRouter from './routers/userRouter.js';


const app = express();

dotenv.config('./.env');

cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL,
    })
);

// middleware
app.use(cookieParser());
app.use(express.json({limit: '50mb'}));
app.use(morgan('common'));


app.get('/', (req, res) => {
    res.status(200).send("OK from the server");
});

app.use('/auth', authRouter);
app.use('/posts', postRouter);
app.use('/user', userRouter);

dbConnect().then(() => console.log(`MongoDB connected successfully`));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});