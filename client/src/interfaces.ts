export interface IDoctor {
  name: string;
}

export interface IRecord {
  patient: string;
  doctor: IDoctor;
  datetime: Date;
  complaints?: string[];
}

export interface IContext {
  doctors: IDoctor[];
  records: IRecord[];
}
