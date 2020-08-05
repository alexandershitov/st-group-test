import * as React from "react";
import { RegisterForm } from "../components/register/RegisterForm";

export interface IRegisterProps {
  doctors: string[];
}

export const Register: React.SFC<IRegisterProps> = ({ doctors }) => (
  <RegisterForm doctors={doctors} />
);
