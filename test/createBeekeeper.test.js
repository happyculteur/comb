import request from 'supertest';
import server, { app } from '../src/app';

describe('createBeekeeper mutation', () => {
  afterAll(() => new Promise((resolve) => {
    server.close(resolve);
  }));

  test('creates a beekeeper', () => {
    const query = `
    mutation {
      registerBeekeeper(input: {
        firstName: "david",
        lastName: "billamboz",
        email: "david@billamboz.com",
        phone: "0000",
        address: {
          formatted: "youhou",
          location: {
            latitude: 1,
            longitude: 2
          }
        }
      }) {
        id
      }
    }
    `;
    const variables = {};
    return request(app)
      .post('/graphql')
      .send({
        query,
        variables,
      })
      .set('Accept', 'application/json')
      .expect(200)
      .then((response) => {
        console.log(response.body);
      });
  });
});
