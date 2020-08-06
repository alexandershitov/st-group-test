import { check } from "express-validator";
import { DB } from "../../../db/db";

export const schema = () => [
  check("patient")
    .exists()
    .withMessage("Поле обязательно")
    .bail()
    .isString()
    .withMessage("Должно быть строкой")
    .isLength({ min: 5 })
    .withMessage("Минимальная длина - 5 символов")
    .custom((value) => String(value).replace(/\s/g, "").length !== 0)
    .withMessage("Не может состоять только из пробелов"),

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

      return existing.length === 0;
    })
    .withMessage("Данный врач в это время уже имеет запись"),

  check("datetime")
    .exists()
    .withMessage("Поле обязательно")
    .bail()
    .isString()
    .withMessage("Должно быть строкой"),
];
