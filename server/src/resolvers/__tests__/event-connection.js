const {EventConnection} = require('../../resolvers');
const {mockContext} = require('../mock-context');

describe('[EventConnectionResolver]', () => {
  test('returns events', async () => {
    const res = await EventConnection.events({
      events: [{id: 1, id: 2}],
      cursor: 3,
    });
    expect(res).toEqual([{id: 1, id: 2}]);
  });
});
