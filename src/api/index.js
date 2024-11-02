import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import corsOptions from "../../src/configs/cors.js";
import connectToDB from "../../src/db/db.js";
import ProductRoutes from "./products.js";

const app = express();

(async () => {
  await connectToDB(); // Connect to database on initialization
})();

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("hello server");
});

// Attach product routes
app.use("/getProducts", ProductRoutes);

// Export as a serverless function for Vercel
export default app;
