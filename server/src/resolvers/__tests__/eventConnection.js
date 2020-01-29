const {EventConnection} = require('../../resolvers');
const {mockContext} = require('../mockContext');

describe('[EventConnectionResolver]', () => {
  test('returns events', async () => {
    const res = await EventConnection.events({event: 1});
    expect(res).toBe(1);
  })
})