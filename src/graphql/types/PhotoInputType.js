import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';

export default new GraphQLInputObjectType({
  name: 'PhotoInput',
  fields: () => {
    return {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
      arn: {
        type: new GraphQLNonNull(GraphQLString),
      },
    };
  },
});
