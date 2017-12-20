import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'BeekeeperExperience',
  description: '',
  values: {
    BEGINNER: {
      value: 'BEGINNER',
      description: '',
    },
    INTERMEDIATE: {
      value: 'INTERMEDIATE',
      description: '',
    },
    EXPERIENCED: {
      value: 'EXPERIENCED',
      description: '',
    },
  },
});
