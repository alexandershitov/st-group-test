export interface IRecord {
  patient: string;
  doctor: string;
  datetime: Date;
  complaints?: string[];
}

export interface IContext {
  doctors: string[];
  records: IRecord[];
}
