import { IAddress } from "./";

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  adress: IAddress;
  userType: UserCategory;
}

enum UserCategory {
  INDIVIDUAL = "INDIVIDUAL",
  BEEKEEPER = "BEEKEEPER"
}
