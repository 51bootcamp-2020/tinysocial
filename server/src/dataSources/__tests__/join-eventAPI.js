const {
  JoinEventAPI,
  userIdIsNotPassedMessage,
  eventIdIsNotPassedMessage,
} = require('../join-eventAPI');
const {mockStore} = require('../mockStore');

const joinEventAPI = new JoinEventAPI(mockStore);
joinEventAPI.initialize({context: {userId: 1}});

describe('[JoinEventAPI.getParticipatedEventIds]', () => {
  test('throws error if userId is not passed', async () => {
    expect(joinEventAPI.getParticipatedEventIds()).rejects.toThrow(
        userIdIsNotPassedMessage);
  });

  test('returns null if non-existing EventParticipant\'s PK is passed', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce(null);
    const res = await joinEventAPI.getParticipatedEventIds(42);
    expect(res).toEqual(null);
  });

  test('returns all participated evnetIds if existing userId is passed ', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([
      {eventId: 10},
      {eventId: 42},
    ]);
    const res = await joinEventAPI.getParticipatedEventIds(42);
    expect(res).toEqual([
      {eventId: 10},
      {eventId: 42},
    ]);
  });
});

describe('[JoinEventAPI.getUserIdsOfParticipants]', () => {
  test('throws error if userId is not passed', async () => {
    expect(joinEventAPI.getUserIdsOfParticipants()).rejects.toThrow(
        eventIdIsNotPassedMessage);
  });

  test('returns null if non-existing EventParticipant\'s PK is passed', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce(null);
    const res = await joinEventAPI.getUserIdsOfParticipants(42);
    expect(res).toEqual(null);
  });

  test('returns all participated userIds if existing eventId is passed ', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([
      {userId: 10},
      {userId: 42},
    ]);
    const res = await joinEventAPI.getUserIdsOfParticipants(42);
    expect(res).toEqual([
      {userId: 10},
      {userId: 42},
    ]);
  });
});

describe('[JoinEventAPI.joinEvent', () => {
  test('add schedule', async () => {
    const res = await joinEventAPI.joinEvent({
      eventId: 10,
      userId: 42,
    });
    expect(res).toEqual({
      eventId: 10,
      userId: 42,
    });
  });
});
