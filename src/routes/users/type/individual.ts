import { ISpace } from "./";

export interface IIndividual {
    interesets: IndividualInterest;
    experience: IndividualExperience;
    hasSpace: boolean;
    space: ISpace;
}

export enum IndividualExperience {
    NONE = "NONE",
    BEGINNER = "BEGINNER",
    TRAINED = "TRAINED"
}

enum IndividualInterest {
    INSTALL_BY_HIMSELF = "INSTALL_BY_HIMSELF",
    INSTALL_BY_BEEKEPER = "INSTALL_BY_BEEKEPER",
    LEARN = "LEARN"
}
