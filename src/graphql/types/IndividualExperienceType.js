import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'IndividualExperience',
  description: '',
  values: {
    NONE: {
      value: 'NONE',
      description: '',
    },
    BEGINNER: {
      value: 'BEGINNER',
      description: '',
    },
    TRAINED: {
      value: 'TRAINED',
      description: '',
    },
  },
});
