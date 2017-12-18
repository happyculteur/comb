import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLBoolean,
  GraphQLNonNull,
} from 'graphql';
import AddressType from './AddressType';
import UserExperienceType from './UserExperienceType';
import SpaceType from './SpaceType';
import UserType from './UserType';

export default new GraphQLObjectType({
  name: 'Individual',
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
    wantsToInstallByHimself: {
      type: GraphQLBoolean,
    },
    wantsToInstallByBeekeeper: {
      type: GraphQLBoolean,
    },
    wantsToLearn: {
      type: GraphQLBoolean,
    },
    experience: {
      type: UserExperienceType,
    },
    hasSpace: {
      type: GraphQLBoolean,
    },
    space: {
      type: SpaceType,
    },
  }),
});
