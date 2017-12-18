import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import AddressType from './AddressType';
import SpaceCategoryType from './SpaceCategoryType';
import PhotoType from './PhotoType';

export default new GraphQLObjectType({
  name: 'Space',
  fields: () => {
    return {
      address: {
        type: AddressType,
      },
      description: {
        type: GraphQLString,
      },
      size: {
        type: GraphQLInt,
      },
      category: {
        type: SpaceCategoryType,
      },
      photo: {
        type: PhotoType,
      },
    };
  },
});
