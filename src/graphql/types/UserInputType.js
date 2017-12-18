import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
import AddressInputType from './AddressInputType';
import BeekeeperParamsInputType from './BeekeeperParamsInputType';
import IndividualParamsInputType from './IndividualParamsInputType';
import UserCategoryType from './UserCategoryType';

export default new GraphQLInputObjectType({
  name: 'UserInput',
  fields: () => {
    return {
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
        type: new GraphQLNonNull(AddressInputType),
      },
      category: {
        type: new GraphQLNonNull(UserCategoryType),
      },
      beekeeperParams: {
        type: BeekeeperParamsInputType,
      },
      individualParams: {
        type: IndividualParamsInputType,
      },
    };
  },
});
