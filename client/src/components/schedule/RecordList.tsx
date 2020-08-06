import * as React from "react";
import { IRecord, IRecordToRemove } from "../../interfaces";
import { Record } from "./Record";

export interface IRecordListProps {
  records: IRecord[];
  chosenDoctor: string;
  chosenDatetime: string;
  removeRecord: (recordToRemove: IRecordToRemove) => void;
}

export const RecordList: React.SFC<IRecordListProps> = ({
  records,
  chosenDoctor,
  chosenDatetime,
  removeRecord,
}) => (
  <>
    {records
      .filter(
        (r) =>
          r.doctor === chosenDoctor &&
          r.datetime.split(",")[0] === chosenDatetime
      )
      .map((r) => (
        <>
          <Record
            patient={r.patient}
            datetime={r.datetime}
            complaints={r.complaints}
          />
          <button
            type="button"
            onClick={(e) =>
              removeRecord({ doctor: chosenDoctor, datetime: r.datetime })
            }
          >
            Отменить
          </button>
        </>
      ))}
  </>
);
