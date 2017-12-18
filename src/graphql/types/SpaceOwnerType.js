import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'SpaceOwner',
  description: '',
  values: {
    INDIVIDUAL: {
      value: 'INDIVIDUAL',
      description: '',
    },
    COMPANY: {
      value: 'COMPANY',
      description: '',
    },
  },
});
