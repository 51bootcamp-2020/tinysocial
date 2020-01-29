const {EventAPI} = require('../eventAPI');
const {mockStore} = require('../mockStore');

const eventAPI = new EventAPI(mockStore);
eventAPI.initialize({context: {user: {id: 1}}});

describe('[EventAPI.getStartDateTimeOfEventSchedule]', () => {
  test('returns null', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce(null);
    const res = await eventAPI.getStartDateTimeOfEventSchedule(987654321);
    expect(res).toEqual(null);
  });

  test('looks up startDateTime', async () => {
    mockStore.users.findOrCreate.mockReturnValueOnce();
    const res = await eventAPI.getStartDateTimeOfEventSchedule(1);
  });
});

