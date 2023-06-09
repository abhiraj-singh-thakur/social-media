const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cloudinary = require('cloudinary').v2;
const cors = require('cors');

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
app.use(express.json({limit : '50mb'}));
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