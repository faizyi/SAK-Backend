import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./src/configs/server.js";
import corsOptions from "./src/configs/cors.js";
import connectDB from "./src/db/db.js";
const app = express();



app.use(bodyParser.json({ limit: "50mb" })); // Increase limit for large files
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json());
app.use(cors(corsOptions));

(async () => {
    await connectDB();
})();

app.get("/", (req, res) => {
    res.send("hello server");
});


app.listen(config.appPort, () => {
    console.log(`Server running on port ${config.appPort}`);
});