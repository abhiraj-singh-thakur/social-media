const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;

const dbConnect = require('./dbConnect');
const authRouter = require('./routers/authRouter');
const postRouter = require('./routers/postRouter');
const userRouter = require('./routers/userRouter');


const app = express();

dotenv.config('./.env');

cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET_KEY
});

// middleware
app.use(cookieParser());
app.use(express.json());
app.use(morgan('common'));


app.get('/', (req, res) => {
    res.status(200).send("OK from the server");
});

app.use('/api/auth', authRouter);
app.use('/api/posts', postRouter);
app.use('/api/users', userRouter);

dbConnect().then(() => console.log(`MongoDB connected successfully`));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});