import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import AddressType from './AddressType';
import BeekeeperType from './BeekeeperType';
import IndividualType from './IndividualType';
import UserCategoryType from './UserCategoryType';

export default new GraphQLObjectType({
  name: 'User',
  fields: () => {
    return {
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
      category: {
        type: new GraphQLNonNull(UserCategoryType),
      },
      beekeeper: {
        type: BeekeeperType,
      },
      individual: {
        type: IndividualType,
      },
    };
  },
});
