import {
  IAddress,
  IBeekeeper,
  IIndividual
} from "./";

export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    adress: IAddress;
    category: UserCategory;
    beekeeper: IBeekeeper;
    Individual: IIndividual;
}

enum UserCategory {
    INDIVIDUAL = "INDIVIDUAL",
    BEEKEEPER = "BEEKEEPER"
}
