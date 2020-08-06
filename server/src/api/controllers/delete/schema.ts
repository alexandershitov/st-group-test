import { check } from "express-validator";
import { DB } from "../../../db/db";

export const schema = () => [
  check("doctor")
    .exists()
    .withMessage("Поле обязательно")
    .bail()
    .custom((value) => DB.getDoctors().includes(value))
    .withMessage("Данного врача не существует")
    .custom((value, { req }) => {
      const records = DB.getRecords();
      const existing = records.filter(
        (r) => r.doctor === value && r.datetime === req.body.datetime
      );

      return existing.length !== 0;
    })
    .withMessage("Данной записи не существует"),

  check("datetime")
    .exists()
    .withMessage("Поле обязательно")
    .bail()
    .isString()
    .withMessage("Должно быть строкой"),
];
