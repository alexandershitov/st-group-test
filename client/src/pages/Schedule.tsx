import * as React from "react";
import { IContext } from "../interfaces";

export interface IScheduleProps {
  context: IContext;
}

export const Schedule: React.SFC<IScheduleProps> = ({ context }) => {
  console.log("Schedule");
  console.log(context);
  return <div>Schedule Container</div>;
};
