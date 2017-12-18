import {
  GraphQLInputObjectType,
  GraphQLString,
  GraphQLNonNull,
} from 'graphql';
// import LocationInputType from './LocationInputType';

export default new GraphQLInputObjectType({
  name: 'AddressInput',
  fields: () => {
    return {
      formatted: {
        type: new GraphQLNonNull(GraphQLString),
      },
      // location: {
      //   type: new GraphQLNonNull(LocationInputType),
      // },
    };
  },
});
