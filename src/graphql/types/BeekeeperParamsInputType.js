import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import AddressInputType from './AddressInputType';
import BeekeeperCategoryType from './BeekeeperCategoryType';
import UserExperienceType from './UserExperienceType';
import BeekeeperInterestType from './BeekeeperInterestType';
import SpaceInputType from './SpaceInputType';
import SpaceOwnerType from './SpaceOwnerType';

export default new GraphQLInputObjectType({
  name: 'BeekeeperParamsInput',
  fields: () => ({
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(AddressInputType),
    },
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
      type: BeekeeperInterestType,
    },
    searchedSpaces: {
      type: new GraphQLList(SpaceInputType),
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
      type: AddressInputType,
    },
  }),
});
