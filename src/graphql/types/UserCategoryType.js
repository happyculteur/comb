import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'UserCategory',
  description: '',
  values: {
    INDIVIDUAL: {
      value: 'INDIVIDUAL',
      description: '',
    },
    BEEKEEPER: {
      value: 'BEEKEEPER',
      description: '',
    },
  },
});
