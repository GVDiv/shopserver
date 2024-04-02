import express from "express";
import indexRouter from "./src/router/index.router.js";
import errorHandler from "./src/middlewares/errorHandler.js";
import pathHanddler from "./src/middlewares/pathHanddler.mid.js";
import __dirname from "./utils.js";
import { engine } from "express-handlebars";
import morgan from "morgan";
//Server Up
const server = express();
const port = 8080;
const ready = () => console.log("server ready on port " + port);
server.listen(port, ready);
//Midlewares
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(morgan("dev"));
//Router
server.use("/", indexRouter);
server.use(errorHandler);
server.use(pathHanddler);
//MOTOR DE PLANTILLAS
server.engine("handlebars", engine());
server.set("view engine", "handlebars");
server.set("views", __dirname + "/src/views");
