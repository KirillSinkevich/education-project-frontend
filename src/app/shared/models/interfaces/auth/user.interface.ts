import {Roles} from "../../../enums";

export interface IUser {
  email: string;
  id: string;
  roles: Roles[];
}
