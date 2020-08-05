import * as React from "react";
import { Input } from "../share/Input";
import { Select } from "../share/Select";
import { Dates } from "../../fun/dates";

export interface IRegisterFormProps {
  doctors: string[];
}

export const RegisterForm: React.SFC<IRegisterFormProps> = ({ doctors }) => (
  <form>
    <p>ФИО пациента:</p>
    <p>
      <Input name="patient" type="text" placeholder="Введите ФИО" />
    </p>

    <p>Лечащий врач:</p>
    <p>
      <Select name="doctor" options={doctors} />
    </p>

    <p>Время записи:</p>
    <p>
      <Select name="datetime" options={Dates.call()} />
    </p>

    <p>
      <button
        type="button"
        onClick={() => {
          console.log('Click');
        }}
      >
        Записаться к врачу
      </button>
    </p>
  </form>
);
