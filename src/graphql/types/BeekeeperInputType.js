import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
} from 'graphql';
import AddressInputType from './AddressInputType';
import BeekeeperCategoryType from './BeekeeperCategoryType';
import BeekeeperExperienceType from './BeekeeperExperienceType';
import BeekeeperInterestType from './BeekeeperInterestType';
import SpaceCategoryType from './SpaceCategoryType';
import SpaceOwnerType from './SpaceOwnerType';
import IndividualExperienceType from './IndividualExperienceType';

export default new GraphQLInputObjectType({
  name: 'BeekeeperInput',
  fields: () => {
    return {
      category: {
        type: BeekeeperCategoryType,
      },
      experience: {
        type: BeekeeperExperienceType,
      },
      hiveCount: {
        type: GraphQLString,
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
        type: AddressInputType,
      },
    };
  },
});
