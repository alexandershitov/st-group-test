import express from "express";
import { ViewEngine } from "./utils/viewEngine";
import { IgnoreFavicon } from "./middleware/ignoreFavicon";
import { Paths } from "./utils/paths";
import { Context } from "./utils/context";

const application = express();

application.use(IgnoreFavicon.middleware);

application.set("view engine", ViewEngine.extname());
application.set("views", Paths.viewsPath());
application.engine(ViewEngine.extname(), ViewEngine.call());

application.get("/", (req, res) => {
  res.render("register.hbs", Context.call(req));
});

application.get("/schedule", (req, res) => {
  res.render("schedule.hbs", Context.call(req));
});

application.get("*", (req, res) => {
  res.redirect("/");
});

export default application;
