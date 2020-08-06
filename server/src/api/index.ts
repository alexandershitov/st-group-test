import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { default as Router } from "./router";

const API = express();

API.use(cors());
API.use(bodyParser.json());
API.use(bodyParser.urlencoded({ extended: true }));

API.use("/", Router);

export default API;
