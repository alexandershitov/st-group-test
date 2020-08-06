import * as React from "react";
import { IContext } from "./interfaces";
import { Register } from "./pages/Register";
import { Schedule } from "./pages/Schedule";

export interface IAppProps {
  context: IContext;
}

export const App: React.SFC<IAppProps> = ({ context }) => (
  <>
    <p>
      <a href="http://127.0.0.1:3000/">Записаться на прием</a>
    </p>
    <p>
      <a href="http://127.0.0.1:3000/schedule">Расписание врачей</a>
    </p>

    {window.location.pathname === "/schedule" ? (
      <Schedule context={context} />
    ) : (
      <Register doctors={context.doctors} />
    )}
  </>
);
