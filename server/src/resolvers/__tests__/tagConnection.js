const {TagConnection} = require('../../resolvers');
const {mockContext} = require('../mockContext');

describe('[TagConnectionResolver]', () => {
  test('returns tags', async () => {
    const res = await TagConnection.tags({
      tags: [{id: 1, id: 2}],
      cursor: 3,
    });
    expect(res).toEqual([{id: 1, id: 2}]);
  });
});
