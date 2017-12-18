import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLList,
} from 'graphql';
import AddressType from './AddressType';
import BeekeeperCategoryType from './BeekeeperCategoryType';
import UserExperienceType from './UserExperienceType';
import BeekeeperInterestType from './BeekeeperInterestType';
import SpaceType from './SpaceType';
import SpaceOwnerType from './SpaceOwnerType';

export default new GraphQLObjectType({
  name: 'BeekeeperParams',
  fields: () => ({
    category: {
      type: BeekeeperCategoryType,
    },
    experience: {
      type: UserExperienceType,
    },
    hiveCount: {
      type: GraphQLInt,
    },
    interests: {
      type: new GraphQLList(BeekeeperInterestType),
    },
    searchedSpaces: {
      type: new GraphQLList(SpaceType),
    },
    searchedSpacesOwnerTypes: {
      type: new GraphQLList(SpaceOwnerType),
    },
    studentTypes: {
      type: new GraphQLList(UserExperienceType),
    },
    formationCost: {
      type: GraphQLInt,
    },
    formationAddress: {
      type: AddressType,
    },
  }),
});
