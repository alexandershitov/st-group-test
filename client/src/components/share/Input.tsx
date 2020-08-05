import * as React from "react";

export interface IInputProps {
  name: string;
  type: string;
  placeholder: string;
}

export const Input: React.SFC<IInputProps> = ({ name, type, placeholder }) => (
  <input name={name} type={type} placeholder={placeholder} />
);
