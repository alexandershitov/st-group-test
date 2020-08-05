import fs from "fs";
import path from "path";

const file = () => path.join(__dirname, "../../../db.json");

const fetchData = () => JSON.parse(fs.readFileSync(file(), "utf-8"));

const saveData = (data) =>
  fs.writeFileSync(file(), JSON.stringify(data, null, 2));

const getDoctors = () => fetchData().doctors;

const getRecords = () =>
  fetchData().records.map((r) => {
    const { id, ...rest } = r;
    return rest;
  });

const postRecord = (record: object) => {
  const data = fetchData();

  saveData({
    ...data,
    records: [...data.records, { id: data.records.length, ...record }],
  });
};

const deleteRecord = (doctor: string, datetime: string) => {
  const data = fetchData();

  saveData({
    ...data,
    records: data.records.filter(
      (r) => r.doctor !== doctor && r.datetime !== datetime
    ),
  });
};

export const DB = { getDoctors, getRecords, postRecord, deleteRecord };
