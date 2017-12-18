import {
  GraphQLInputObjectType,
  GraphQLFloat,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'LocationInput',
  fields: () => ({
    latitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
    longitude: {
      type: new GraphQLNonNull(GraphQLFloat),
    },
  }),
});
