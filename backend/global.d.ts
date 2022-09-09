declare global {
  namespace NodeJS {
    interface ProcessEnv {
      HOST_DB: string;
      PORT_DB: number;
      USER_DB: string;
      PASSWORD_DB: string;
      NAME_DB: string;
    }
  }
}
export {};
