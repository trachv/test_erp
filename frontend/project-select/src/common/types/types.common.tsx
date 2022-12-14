export interface IClient {
  id: number;
  ID_DEP_CLIENT: string;
  NAME_CLIENT: string;
  [key: string]: any;
}

export interface IProject {
  id: number;
  DAY_ID: string;
  OPERATION_DATE: string;
  ID_DEP_CLIENT: string;
  ID_PROJECT: string;
  [key: string]: any;
}

export interface IMenuItem {
  label: string;
  value: string;
}
