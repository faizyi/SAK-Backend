import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "../configs/server.js";
import corsOptions from "../configs/cors.js";
import connectToDB from "../db/db.js";
import ProductRoutes from "../routes/products.js"
const app = express();

(async () => {
    await connectToDB();
  })();

app.use(bodyParser.json({ limit: "50mb" })); // Increase limit for large files
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(cors(corsOptions));


app.get("/", (req, res) => {
    res.send("hello server");
});
app.use("/", ProductRoutes);


app.listen(config.appPort, () => {
    console.log(`Server running on port ${config.appPort}`);
});

export default app;