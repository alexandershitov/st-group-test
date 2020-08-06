import * as React from "react";
import { RegisterForm } from "../components/register/RegisterForm";
import {
  IRegisterFormData,
  IRegisterFormResponse,
} from "../components/register/interfaces";
import { API } from "../fun/api";

export interface IRegisterProps {
  doctors: string[];
}

const makeResponse = (result: object, success: boolean) => ({
  result,
  success,
});

const handleOnRegister = (
  data: IRegisterFormData
): Promise<IRegisterFormResponse> => {
  try {
    return API.postRecord(data)
      .then((response) => response.json())
      .then((data) =>
        data.errors
          ? makeResponse(data, false)
          : makeResponse({ message: "Вы успешно записались на прием" }, true)
      );
  } catch (error) {
    return new Promise((resolve, reject) => {
      resolve(makeResponse({ errors: "Ошибка сети" }, false));
    });
  }
};

export const Register: React.SFC<IRegisterProps> = ({ doctors }) => (
  <RegisterForm doctors={doctors} onRegister={handleOnRegister} />
);
