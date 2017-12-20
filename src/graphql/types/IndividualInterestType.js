import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'IndividualInterest',
  description: '',
  values: {
    SPACES: {
      value: 'INSTALL_BY_HIMSELF',
      description: '',
    },
    TEACH: {
      value: 'INSTALL_BY_BEEKEEPER',
      description: '',
    },
    LEARN: {
      value: 'LEARN',
      description: '',
    },
  },
});
