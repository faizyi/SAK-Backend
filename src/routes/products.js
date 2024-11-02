import {Router} from "express";
const router = Router();

router.get("/getProducts", getProducts);

export default router;