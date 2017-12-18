import {
  GraphQLNonNull,
} from 'graphql';
import BeekeeperType from '../types/BeekeeperType';
import BeekeeperInputType from '../types/BeekeeperInputType';
import Beekeeper from '../../models/Beekeeper';

export default {
  name: 'registerBeekeeper',
  type: BeekeeperType,
  args: {
    input: {
      type: new GraphQLNonNull(BeekeeperInputType),
    },
  },
  async resolve(root, { input }) {
    const beekeeper = new Beekeeper(input);
    // TODO: perform validations (ex: email unique)
    await beekeeper.save();
    return beekeeper.data;
  },
};
