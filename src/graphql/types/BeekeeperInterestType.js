import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'BeekeeperInterest',
  description: '',
  values: {
    SPACES: {
      value: 'SPACES',
      description: '',
    },
    TEACH: {
      value: 'TEACH',
      description: '',
    },
    LEARN: {
      value: 'LEARN',
      description: '',
    },
    SELL: {
      value: 'SELL',
      description: '',
    },
  },
});
