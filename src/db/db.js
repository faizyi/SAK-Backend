import mongoose from "mongoose";
import config from "../../src/configs/server.js";

let isConnected = false;

const connectToDB = async () => {
  if (isConnected) return;

  try {
    const db = await mongoose.connect(config.dbURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = db.connections[0].readyState;
    console.log("Connected to MongoDB database successfully.");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
};

export default connectToDB;
