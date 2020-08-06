import * as React from "react";
import { Dates } from "../../fun/dates";

export interface IRegisterFormData {
  patient: string;
  doctor: string;
  datetime: string;
  complaints?: string;
}

export interface IRegisterFormResult {
  success: boolean;
  message: string;
}

export interface IRegisterFormProps {
  doctors: string[];
  onRegister: (data: IRegisterFormData) => IRegisterFormResult;
}

export const RegisterForm: React.SFC<IRegisterFormProps> = ({ doctors, onRegister }) => {
  const dateVariants = Dates.forRegister();

  const [patient, setPatient] = React.useState<string>("");
  const [patientError, setPatientError] = React.useState<string>("");

  const [doctor, setDoctor] = React.useState<string>(doctors[0]);

  const [datetime, setDatetime] = React.useState<string>(dateVariants[0]);

  const [complaints, setComplaints] = React.useState<string>("");

  const [submitted, setSubmitted] = React.useState<Boolean>(false);

  const [submitResult, setSubmitResult] = React.useState<IRegisterFormResult>({
    success: false,
    message: "",
  });

  const onPatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    const value = e.currentTarget.value;

    setPatient(value);
    validatePatient(value);
  };

  const validatePatient = (value: string): string => {
    const isEmptyError = value === "";
    const isLengthError = value.length < 5;
    const isAllSpacesError = value.replace(/\s/g, "").length === 0;

    const error = isEmptyError
      ? "Поле не может быть пустым"
      : isLengthError
      ? "Поле должно содержать не меньше 5 символов"
      : isAllSpacesError
      ? "Не может состоять только из пробелов"
      : "";

    setPatientError(error);

    return error;
  };

  const onDoctorChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDoctor(e.currentTarget.value);
  };

  const onDatetimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setDatetime(e.currentTarget.value);
  };

  const onComplaintsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setComplaints(e.currentTarget.value);
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const patientError = validatePatient(patient);

    if (patientError === "") {
      const result = onRegister({
        patient,
        doctor,
        datetime,
        complaints,
      });
      setPatient("");
      setComplaints("");
      setSubmitResult(result);
      setSubmitted(true);
    }
  };

  return (
    <form noValidate={true} onSubmit={onFormSubmit}>
      <p>ФИО пациента:</p>
      <p>
        <input
          id="patient"
          name="patient"
          type="text"
          placeholder="Введите ФИО"
          value={patient}
          onChange={onPatientChange}
        />
      </p>
      <p>
        <span className="error">{patientError}</span>
      </p>

      <p>Лечащий врач:</p>
      <p>
        <select
          id="doctor"
          name="doctor"
          value={doctor}
          onChange={onDoctorChange}
        >
          {doctors.map((o: string) => (
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

      <p>Жалобы:</p>
      <p>
        <input
          id="complaints"
          name="complaints"
          type="text"
          placeholder="Ваша жалоба"
          onChange={onComplaintsChange}
        />
      </p>

      <p>
        <button type="submit">
          Записаться к врачу
        </button>
      </p>

      {submitted && <p>{submitResult.message}</p>}
    </form>
  );
};
