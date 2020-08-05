import * as React from "react";
import { IDoctor } from '../interfaces';

export interface IRegisterProps { 
    doctors: IDoctor[]
}

export const Register: React.SFC<IRegisterProps> = ({ doctors }) => {
    console.log("Register");
    console.log(doctors);
    return <div>Register Container</div>
}