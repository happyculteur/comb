import {
  GraphQLObjectType,
  GraphQLBoolean,
  GraphQLList,
} from 'graphql';
import IndividualExperienceType from './IndividualExperienceType';
import SpaceType from './SpaceType';
import IndividualInterestType from './IndividualInterestType';

export default new GraphQLObjectType({
  name: 'Individual',
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
        type: SpaceType,
      },
    };
  },
});
