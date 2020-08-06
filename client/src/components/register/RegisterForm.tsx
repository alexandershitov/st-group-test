import * as React from "react";
import { Dates } from "../../fun/dates";
import { IRegisterFormResponse, IRegisterFormProps } from "./interfaces";

export const RegisterForm: React.SFC<IRegisterFormProps> = ({
  doctors,
  onRegister,
}) => {
  const datetimeVariants = Dates.forRegister();

  const [patient, setPatient] = React.useState<string>("");
  const [patientErrors, setPatientErrors] = React.useState<string[]>([]);

  const [doctor, setDoctor] = React.useState<string>(doctors[0]);
  const [doctorErrors, setDoctorErrors] = React.useState<string[]>([]);

  const [datetime, setDatetime] = React.useState<string>(datetimeVariants[0]);
  const [datetimeErrors, setDatetimeErrors] = React.useState<string[]>([]);

  const [complaints, setComplaints] = React.useState<string>("");

  const [submitted, setSubmitted] = React.useState<boolean>(false);

  const [submitResult, setSubmitResult] = React.useState<IRegisterFormResponse>(
    {
      success: false,
      result: {},
    }
  );

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

    setPatientErrors([error]);
    setSubmitted(false);

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

  const clearForm = () => {
    setPatient("");
    setPatientErrors([]);

    setDoctor(doctors[0]);
    setDoctorErrors([]);

    setDatetime(datetimeVariants[0]);
    setDatetimeErrors([]);

    setComplaints("");
  };

  const handleServerResponse = (response: IRegisterFormResponse) => {
    const { result, success } = response;

    if (success) {
      clearForm();
      setSubmitResult(response);
    } else {
      setSubmitted(false);
      const errors = result.errors;

      setPatientErrors(errors.patient || []);
      setDoctorErrors(errors.doctor || []);
      setDatetimeErrors(errors.datetime || []);
    }
  };

  const onFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (validatePatient(patient) === "") {
      setSubmitted(true);

      onRegister({
        patient,
        doctor,
        datetime,
        complaints,
      }).then((response: IRegisterFormResponse) => {
        handleServerResponse(response);
      });
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
        {patientErrors.map((e: string) => (
          <span className="error">{e}</span>
        ))}
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
            <option key={o}>{o}</option>
          ))}
        </select>
      </p>
      <p>
        {doctorErrors.map((e: string) => (
          <span className="error">{e}</span>
        ))}
      </p>

      <p>Время записи:</p>
      <p>
        <select id="datetime" name="datetime" onChange={onDatetimeChange}>
          {datetimeVariants.map((o: string) => (
            <option key={o} selected={o === datetime}>{o}</option>
          ))}
        </select>
      </p>
      <p>
        {datetimeErrors.map((e: string) => (
          <span className="error">{e}</span>
        ))}
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

      {submitted && <p>{submitResult.result.message}</p>}
    </form>
  );
};
