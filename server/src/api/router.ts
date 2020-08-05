import express from "express";
import { RecordsController } from "./controllers";

const Router = express.Router();

Router.post(
  "/post-record",
  RecordsController.PostRecord.schema,
  RecordsController.PostRecord.operation
);

Router.delete(
  "/delete-record",
  RecordsController.DeleteRecord.schema,
  RecordsController.DeleteRecord.operation
);

export default Router;
