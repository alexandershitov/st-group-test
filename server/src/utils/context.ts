import { Title } from "./title";
import { Asset } from "./asset";
import { DB } from "../db/db";

const call = (req) => ({
  title: Title.call(req),
  application: Asset.call("application", "js"),
  context: JSON.stringify({
    doctors: DB.getDoctors(),
    records: DB.getRecords(),
  }),
});

export const Context = { call };
