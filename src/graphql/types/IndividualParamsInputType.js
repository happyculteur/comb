import {
  GraphQLInputObjectType,
  GraphQLBoolean,
} from 'graphql';
import UserExperienceType from './UserExperienceType';
import SpaceInputType from './SpaceInputType';

export default new GraphQLInputObjectType({
  name: 'IndividualParamsInput',
  fields: () => {
    return {
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
        type: SpaceInputType,
      },
    };
  },
});
