import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import LocationType from './LocationType';

export default new GraphQLObjectType({
  name: 'Address',
  fields: () => ({
    formatted: {
      type: new GraphQLNonNull(GraphQLString),
    },
    location: {
      type: new GraphQLNonNull(LocationType),
    },
  }),
});
