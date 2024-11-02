import mongoose from "mongoose";
import config from "../configs/server.js";

let isConnected = false; // Track connection status

const connectToDB = async () => {
  if (isConnected) {
    return; // If already connected, skip connection
  }

  try {
    const db = await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState; // 1 means connected
    console.log("Connected to MongoDB database successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToDB;
