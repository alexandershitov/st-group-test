import * as React from "react";

export interface IRecordProps {
  patient: string;
  datetime: string;
  complaints?: string;
}

export const Record: React.SFC<IRecordProps> = ({
  patient,
  datetime,
  complaints,
}) => (
  <div className="record">
    <p>ФИО Пациента:</p>
    <p>{patient}</p>
    <p>Время записи:</p>
    <p>{datetime}</p>
    {complaints && (
      <>
        <p>Жалобы:</p>
        <p>{complaints}</p>
      </>
    )}
  </div>
);
