import * as React from "react";
import { IContext } from "./interfaces";
import { Register } from "./pages/Register";
import { Schedule } from "./pages/Schedule";

export interface IAppProps {
  context: IContext;
}

export const App: React.SFC<IAppProps> = ({ context }) =>
  window.location.pathname === "/schedule" ? (
    <Schedule context={context} />
  ) : (
    <Register doctors={context.doctors} />
  );
