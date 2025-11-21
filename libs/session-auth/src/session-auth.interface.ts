import { SessionData } from 'express-session';

export interface ISessionAuthInfo {
  readonly email: string;
  readonly emailVerified: boolean;
  readonly firstName: string;
  readonly id: number;
  readonly lastName: string;
}

export interface ISessionData extends SessionData {
  authInfo: ISessionAuthInfo;
}
