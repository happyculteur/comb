import { IAddress, IndividualExperience, SpaceCategory, SpaceOwner } from "./";

export interface IBeekeeper {
  category: BeekeeperCategory;
  experience: BeekeeperExperience;
  hiveCount: number;
  interests: Array<BeekeeperInterrest>;
  searchedSpace: SpaceCategory;
  searchedSpaceOwner: SpaceOwner;
  searchedStudent: IndividualExperience;
  paidFormation: boolean;
  formationAddress: IAddress;
}

enum BeekeeperCategory {
  AMATEUR = "AMATEUR",
  PROFESSIONAL = "PROFESSIONAL"
}

enum BeekeeperExperience {
  BEGINNER = "BEGINNER",
  INTERMEDIATE = "INTERMEDIATE",
  EXPERIENCED = "EXPERIENCED"
}

enum BeekeeperInterrest {
  SPACES = "SPACES",
  TEACH = "TEACH",
  LEARN = "LEARN",
  SELL = "SELL"
}
