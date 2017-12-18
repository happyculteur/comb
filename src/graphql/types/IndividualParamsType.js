import {
  GraphQLObjectType,
  GraphQLBoolean,
} from 'graphql';
import UserExperienceType from './UserExperienceType';
import SpaceType from './SpaceType';

export default new GraphQLObjectType({
  name: 'IndividualParams',
  fields: () => ({
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
