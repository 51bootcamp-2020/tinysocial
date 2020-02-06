const {Event} = require('../../resolvers');
const {mockContext} = require('../mock-context');

const {getTypeOfEvent} = mockContext.dataSources.eventAPI;

describe('[EventResolver]', () => {
  test('returns \'EventBookClub\'', async () => {
    getTypeOfEvent.mockReturnValueOnce(0);
    const res = await Event.__resolveType({id: 1}, mockContext);
    expect(res).toBe('EventBookClub');
  });
  test('throws error', async () => {
    getTypeOfEvent.mockReturnValueOnce(999);
    expect(Event.__resolveType({id: 1}, mockContext)).rejects.toThrow(
        'Data cannot be resolved to any Event type. Please contact to backend developers.',
    );
  });
});
