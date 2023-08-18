import mongoose from 'mongoose';
import dotenv from "dotenv";

dotenv.config({ path: './.env' });

export default   async () => {
    const url = process.env.MONGO_URL;
    try {
        const conn = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log("Error in connecting to MongoDB");
        console.error(err);
        process.exit(1);
    }
}