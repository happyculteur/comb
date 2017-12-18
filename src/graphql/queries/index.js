import {
  GraphQLNonNull,
  GraphQLString,
} from 'graphql';
import UserType from '../types/UserType';
import Beekeeper from '../../models/Beekeeper';

export default {
  getUserById: {
    type: UserType,
    args: {
      id: {
        type: new GraphQLNonNull(GraphQLString),
      },
    },
    resolve(root, args) {
      console.log(args);
      return { test: 'zoup' };
    },
  },
};
