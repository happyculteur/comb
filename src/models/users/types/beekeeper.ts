import {
  IAddress,
  IndividualExperience,
  SpaceCategory,
  SpaceOwner,
  IUser
} from "./";

export interface IBeekeeper extends IUser {
  isAProfesionnal: boolean;
  experience: BeekeeperExperience;
  hiveCount: number;
  interests: Array<BeekeeperInterrest>;
  searchedSpace: SpaceCategory;
  searchedSpaceOwner: SpaceOwner;
  formationLevel: IndividualExperience;
  isFormationFree: boolean;
  formationAddress: IAddress;
}

enum BeekeeperExperience {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERIENCED = "EXPERIENCED"
}

enum BeekeeperInterrest {
  INSTALL = "INSTALL",
  TEACH = "TEACH",
  LEARN = "LEARN",
  SELL = "SELL"
}
