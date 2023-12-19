import {IUser} from "./user.interface";

export interface IToken {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: IUser;
}
