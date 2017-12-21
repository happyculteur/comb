import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'IndividualInterest',
  description: '',
  values: {
    INSTALL_BY_HIMSELF: {
      value: 'INSTALL_BY_HIMSELF',
      description: '',
    },
    INSTALL_BY_BEEKEEPER: {
      value: 'INSTALL_BY_BEEKEEPER',
      description: '',
    },
    LEARN: {
      value: 'LEARN',
      description: '',
    },
  },
});
