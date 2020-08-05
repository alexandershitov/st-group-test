import express from "express";
import { IgnoreFavicon } from "./middleware/ignoreFavicon";
import { default as Resources } from "./resources"
import { default as API } from "./api"

const application = express();

application.use(IgnoreFavicon.middleware);
application.use('/', Resources);
application.use('/api', API)

export default application;
