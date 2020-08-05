import express from "express";
import { ViewEngine } from "../utils/viewEngine";
import { Paths } from "../utils/paths";
import { default as Router } from "./router";

const Resources = express();

Resources.set("view engine", ViewEngine.extname());
Resources.set("views", Paths.viewsPath());
Resources.engine(ViewEngine.extname(), ViewEngine.call());

Resources.use("/", Router);

export default Resources;