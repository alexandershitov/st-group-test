import { Title } from "./title";
import { Asset } from "./asset";

const stubContext = () =>
  JSON.stringify({
    doctors: [
      "Школвский Борис Елизарович",
      "Воронова Тамара Ильевна",
      "Барсова Лилия Олеговна",
      "Крючков Валерий Филиппович",
    ],
    records: [
      {
        patient: "Шитов Александр Игоревич",
        doctor: "Школвский Борис Елизарович",
        timestamp: "2020-08-05T09:00:00Z",
      },
      {
        patient: "Петров Евгений Николаевич",
        doctor: "Барсова Лилия Олеговна",
        timestamp: "2020-08-05T10:30:00Z",
        complaints: "Большая очередь",
      },
    ],
  });

const call = (req) => ({
  title: Title.call(req),
  application: Asset.call("application", "js"),
  context: stubContext(),
});

export const Context = { call };
