import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import AddressType from './AddressType';
import BeekeeperCategoryType from './BeekeeperCategoryType';
import BeekeeperExperienceType from './BeekeeperExperienceType';
import BeekeeperInterestType from './BeekeeperInterestType';
import SpaceCategoryType from './SpaceCategoryType';
import SpaceOwnerType from './SpaceOwnerType';
import IndividualExperienceType from './IndividualExperienceType';

export default new GraphQLObjectType({
  name: 'Beekeeper',
  fields: () => {
    return {
      category: {
        type: BeekeeperCategoryType,
      },
      experience: {
        type: BeekeeperExperienceType,
      },
      hiveCount: {
        type: GraphQLInt,
      },
      interests: {
        type: new GraphQLList(BeekeeperInterestType),
      },
      searchedSpaces: {
        type: new GraphQLList(SpaceCategoryType),
      },
      searchedSpacesOwner: {
        type: new GraphQLList(SpaceOwnerType),
      },
      searchedStudent: {
        type: new GraphQLList(IndividualExperienceType),
      },
      paidFormation: {
        type: GraphQLBoolean,
      },
      formationAddress: {
        type: AddressType,
      },
    };
  },
});
