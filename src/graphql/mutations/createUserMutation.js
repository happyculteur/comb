import {
  GraphQLNonNull,
} from 'graphql';
import UserType from '../types/UserType';
import UserInputType from '../types/UserInputType';
import User from '../../models/User';

export default {
  name: 'createUser',
  type: UserType,
  args: {
    input: {
      type: new GraphQLNonNull(UserInputType),
    },
  },
  async resolve(root, { input }) {
    const user = new User(input);
    // TODO: perform validations (ex: email unique)
    await user.save();
    return user.data;
  },
};
