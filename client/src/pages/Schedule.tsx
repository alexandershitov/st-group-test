import * as React from "react";
import { IContext, IRecord, IRecordToRemove } from "../interfaces";
import { Dates } from "../fun/dates";
import { RecordList } from "../components/schedule/RecordList";
import { API } from "../fun/api";

export interface IScheduleProps {
  context: IContext;
}

export const Schedule: React.SFC<IScheduleProps> = ({ context }) => {
  const dateVariants = Dates.forSchedule();

  const [records, setRecords] = React.useState<IRecord[]>(context.records);

  const [doctor, setDoctor] = React.useState<string>(context.doctors[0]);

  const [datetime, setDatetime] = React.useState<string>(dateVariants[0]);

  const onDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDoctor(e.currentTarget.value);
  };

  const onDatetimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDatetime(e.currentTarget.value);
  };

  const onUpdateRecords = (recordToRemove: IRecordToRemove) => {
    const res = API.deleteRecord({
      doctor: recordToRemove.doctor,
      datetime: recordToRemove.datetime,
    });

    setRecords(
      records.filter(
        (r: IRecord) =>
          !(
            r.doctor === recordToRemove.doctor &&
            r.datetime === recordToRemove.datetime
          )
      )
    );
  };

  return (
    <>
      <p>Лечащий врач:</p>
      <p>
        <select
          id="doctor"
          name="doctor"
          value={doctor}
          onChange={onDoctorChange}
        >
          {context.doctors.map((o: string) => (
            <option>{o}</option>
          ))}
        </select>
      </p>

      <p>Время записи:</p>
      <p>
        <select id="datetime" name="datetime" onChange={onDatetimeChange}>
          {dateVariants.map((o: string) => (
            <option>{o}</option>
          ))}
        </select>
      </p>

      <RecordList
        records={records}
        chosenDoctor={doctor}
        chosenDatetime={datetime}
        removeRecord={onUpdateRecords}
      />
    </>
  );
};
