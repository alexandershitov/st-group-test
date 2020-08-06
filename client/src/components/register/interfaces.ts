export interface IRegisterFormData {
  patient: string;
  doctor: string;
  datetime: string;
  complaints?: string;
}

export interface IRegisterFormResponseResultErrors {
  patient?: string[];
  doctor?: string[];
  datetime?: string[];
}

export interface IRegisterFormResponseResult {
  errors?: IRegisterFormResponseResultErrors;
  message?: string;
}

export interface IRegisterFormResponse {
  result: IRegisterFormResponseResult;
  success: boolean;
}

export interface IRegisterFormProps {
  doctors: string[];
  onRegister: (data: IRegisterFormData) => Promise<IRegisterFormResponse>;
}