import express from "express";
import { Context } from "../utils/context";

const Router = express.Router();

Router.get("/", (req, res) => res.render("register.hbs", Context.call(req)));

Router.get("/schedule", (req, res) =>
  res.render("schedule.hbs", Context.call(req))
);

Router.get("*", (req, res) => res.redirect("/"));

export default Router;
