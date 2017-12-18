import {
  GraphQLInterfaceType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import AddressType from './AddressType';

export default new GraphQLInterfaceType({
  name: 'User',
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
    firstName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    lastName: {
      type: new GraphQLNonNull(GraphQLString),
    },
    email: {
      type: new GraphQLNonNull(GraphQLString),
    },
    phone: {
      type: new GraphQLNonNull(GraphQLString),
    },
    address: {
      type: new GraphQLNonNull(AddressType),
    },
  }),
});
