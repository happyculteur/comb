import request from 'supertest';
import server, { app } from '../src/app';

describe('createUser mutation', () => {
  afterAll(() => new Promise((resolve) => {
    server.close(resolve);
  }));

  test('creates an user', async () => {
    const query = `
    mutation createUser($input: UserInput!) {
      createUser(input: $input) {
        id
        firstName
        lastName
        email
        phone
        address {
          formatted
          location {
            latitude
            longitude
          }
        }
        category
      }
    }
    `;
    const variables = {
      input: {
        firstName: 'Hive',
        lastName: 'Bee',
        email: 'bee@hive.bzzz',
        phone: '+33676767676',
        category: 'INDIVIDUAL',
        address: {
          formatted: '1 rue des Bees',
          location: {
            latitude: 1,
            longitude: 2,
          },
        },
      },
    };
    const { body } = await request(app)
      .post('/graphql')
      .send({
        query,
        variables,
      })
      .set('Accept', 'application/json')
      .expect(200);
  });
});
