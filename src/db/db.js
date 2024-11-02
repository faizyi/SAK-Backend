import mongoose from 'mongoose';
import config from '../configs/server.js';
let isConnected = false;

async function connectDB() {
    if (isConnected) return; // Avoid reconnecting if already connected
    try {
        await mongoose.connect(config.dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        isConnected = true;
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("Could not connect to MongoDB", error);
        throw new Error("Database connection failed");
    }
}

export default connectDB;