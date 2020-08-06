import * as React from "react";
import {
  IRegisterFormData,
  RegisterForm,
} from "../components/register/RegisterForm";
import { API } from "../fun/api";

export interface IRegisterProps {
  doctors: string[];
}

const handleOnRegister = (data: IRegisterFormData) => {
  const res = API.postRecord(data);

  return {
    message: "Вы были успешно записаны на прием",
    success: true,
  };
};

export const Register: React.SFC<IRegisterProps> = ({ doctors }) => (
  <RegisterForm doctors={doctors} onRegister={handleOnRegister} />
);
