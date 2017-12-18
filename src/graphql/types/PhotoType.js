import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Photo',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    arn: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
