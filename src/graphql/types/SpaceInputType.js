import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLInt,
} from 'graphql';
import AddressInputType from './AddressInputType';
import SpaceCategoryType from './SpaceCategoryType';
import PhotoInputType from './PhotoInputType';

export default new GraphQLInputObjectType({
  name: 'SpaceInput',
  fields: () => {
    return {
      address: {
        type: AddressInputType,
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
      // photo: {
      //   type: PhotoInputType,
      // },
    };
  },
});
