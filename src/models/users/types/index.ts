export { IBeekeeper } from "./beekeeper";
export { IIndividual, IndividualExperience } from "./individual";
export { ISpace, SpaceCategory, SpaceOwner } from "./space";
export { IUser } from "./user";

export interface IAddress {
  street: string;
  number: number;
  city: string;
  zipcode: string;
  country: string;
}
