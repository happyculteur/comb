import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import UserType from '../types/UserType';
import User from '../../models/User';

export default {
  type: UserType,
  args: {
    id: {
      type: new GraphQLNonNull(GraphQLString),
    },
  },
  async resolve(root, { id }) {
    const user = await User.getById(id);
    return user.data;
  },
};
