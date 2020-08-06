export interface IRecord {
  patient: string;
  doctor: string;
  datetime: string;
  complaints?: string;
}

export interface IRecordToRemove {
  doctor: string;
  datetime: string;
}

export interface IContext {
  doctors: string[];
  records: IRecord[];
}
