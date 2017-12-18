import {
  GraphQLEnumType,
} from 'graphql';

export default new GraphQLEnumType({
  name: 'SpaceCategory',
  description: '',
  values: {
    GARDEN: {
      value: 'GARDEN',
      description: '',
    },
    BALCONY: {
      value: 'BALCONY',
      description: '',
    },
    TERRACE: {
      value: 'TERRACE',
      description: '',
    },
    ROOF: {
      value: 'ROOF',
      description: '',
    },
    OTHER: {
      value: 'OTHER',
      description: '',
    },
  },
});
