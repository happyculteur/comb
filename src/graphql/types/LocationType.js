import {
  GraphQLObjectType,
  GraphQLFloat,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Location',
  fields: () => ({
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  }),
});
