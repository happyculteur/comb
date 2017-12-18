import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PhotoInput',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    arn: {
      type: new GraphQLNonNull(GraphQLString),
    },
  }),
});
