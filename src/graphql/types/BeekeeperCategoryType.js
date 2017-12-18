import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'BeekeeperCategory',
  description: '',
  values: {
    AMATEUR: {
      value: 'AMATEUR',
      description: '',
    },
    PROFESSIONAL: {
      value: 'PROFESSIONAL',
      description: '',
    },
  },
});
