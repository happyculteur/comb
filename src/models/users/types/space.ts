import { IAddress } from "./";

export interface ISpace {
  address: IAddress;
  description: string;
  size: number;
  category: SpaceCategory;
}

export enum SpaceOwner {
  INDIVUAL = "INDIVIDUAL",
  COMPANY = "COMPANY"
}

export enum SpaceCategory {
  GARDEN = "GARDEN",
  BALCONY = "BALCONY",
  TERRACE = "TERRACE",
  ROOF = "ROOF",
  OTHER = "OTHER"
}
