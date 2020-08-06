import { validationResult } from "express-validator";
import { Errors } from "../../utils/errors";
import { DB } from "../../../db/db";

export const operation = (req, res, next) => {
  const errors = validationResult(req)["errors"];

  if (errors.length > 0) {
    return res.status(422).json({ errors: Errors.combine(errors) });
  } else {
    const { doctor, datetime } = req.body;
    DB.deleteRecord(doctor, datetime);
    
    return res.status(200).json({ });
  }
};
