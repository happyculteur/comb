import {
  GraphQLInputObjectType,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import IndividualExperienceType from './IndividualExperienceType';
import SpaceInputType from './SpaceInputType';
import IndividualInterestType from './IndividualInterestType';

export default new GraphQLInputObjectType({
  name: 'IndividualInput',
  fields: () => {
    return {
      interests: {
        type: new GraphQLList(IndividualInterestType),
      },
      experience: {
        type: IndividualExperienceType,
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
