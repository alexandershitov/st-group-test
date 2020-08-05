import * as React from "react";

export interface ISelectProps {
  name: string;
  options: string[];
}

export const Select: React.SFC<ISelectProps> = ({ name, options }) => (
  <select name={name}>
    {options.map((o) => (
      <option>{o}</option>
    ))}
  </select>
);
