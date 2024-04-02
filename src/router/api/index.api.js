import { Router } from "express";
import productsRouter from "./product.api.js";

const apiRouter = Router();

apiRouter.use("/products", productsRouter)

export default apiRouter;
