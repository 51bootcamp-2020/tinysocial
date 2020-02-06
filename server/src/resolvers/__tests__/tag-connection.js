const {TagConnection} = require('../../resolvers');
const {mockContext} = require('../mock-context');

describe('[TagConnectionResolver]', () => {
  test('returns tags', async () => {
    const res = await TagConnection.tags({
      tags: [{id: 1, id: 2}],
      cursor: 3,
    });
    expect(res).toEqual([{id: 1, id: 2}]);
  });
});
