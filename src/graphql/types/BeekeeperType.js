import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import AddressType from './AddressType';
import BeekeeperCategoryType from './BeekeeperCategoryType';
import UserExperienceType from './UserExperienceType';
import BeekeeperInterestType from './BeekeeperInterestType';
import SpaceType from './SpaceType';
import SpaceOwnerType from './SpaceOwnerType';
import UserType from './UserType';

export default new GraphQLObjectType({
  name: 'Beekeeper',
  interfaces: [UserType],
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
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
      type: new GraphQLNonNull(AddressType),
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
