import * as React from "react";
import * as ReactDOM from "react-dom";
import { IContext } from "./interfaces";
import { App } from "./App";

export const initApp = (context: IContext) =>
  ReactDOM.render(<App context={context} />, document.getElementById("root"));
