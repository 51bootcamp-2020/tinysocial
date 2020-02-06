const {Tag} = require('../../resolvers');
const {mockContext} = require('../mock-context');

const {getAttributeOfTag} = mockContext.dataSources.tagAPI;
const {getEventIdsOfTag} = mockContext.dataSources.eventAPI;

describe('[TagResolver]', () => {
  test('returns name', async () => {
    getAttributeOfTag.mockReturnValueOnce('ThisIsTagName1');
    const res = await Tag.name({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsTagName1');
  });
  test('returns events', async () => {
    getEventIdsOfTag.mockReturnValueOnce([{eventId: 1}]);
    const res = await Tag.events({id: 1}, {}, mockContext);
    expect(res).toEqual([{eventId: 1}]);
  });
});
