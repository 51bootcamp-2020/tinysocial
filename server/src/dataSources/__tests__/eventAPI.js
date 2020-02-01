const {EventAPI} = require('../eventAPI');
const {mockStore} = require('../mockStore');
const {
  scheduleIdIsNotPassedMessage,
  eventIdIsNotPassedMessage,
  userIdIsNotPassedMessage,
  tagIdIsNotPassedMessage,
  notValidValueMessage,
} = require('../../errorMessages');

const eventAPI = new EventAPI(mockStore);
eventAPI.initialize({context: {user: {id: 1}}});

describe('[EventAPI.getAttributeOfSchedule]', () => {
  test('throws error if scheduleId is not passed', async () => {
    expect(eventAPI.getAttributeOfSchedule()).rejects.toThrow(
        scheduleIdIsNotPassedMessage);
  });

  test('returns null when passed invalid scheduleId', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce(null);
    const res = await eventAPI.getAttributeOfSchedule('startDateTime', 987654321);
    expect(res).toEqual(null);
  });

  test('looks up startDateTime', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce({startDateTime: new Date('2020-01-28')});
    const res = await eventAPI.getAttributeOfSchedule('startDateTime', 1);
    expect(res - new Date('2020-01-28')).toEqual(0);
  });

  test('looks up endDateTime', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce({endDateTime: new Date('2020-01-28')});
    const res = await eventAPI.getAttributeOfSchedule('endDateTime', 1);
    expect(res - new Date('2020-01-28')).toEqual(0);
  });

  test('looks up address', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce({address: 'testAddress'});
    const res = await eventAPI.getAttributeOfSchedule('address', 1);
    expect(res).toEqual('testAddress');
  });

  test('looks up latitude', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce({latitude: 123.456});
    const res = await eventAPI.getAttributeOfSchedule('latitude', 1);
    expect(res).toEqual(123.456);
  });

  test('looks up longitude', async () => {
    mockStore.Schedule.findOne.mockReturnValueOnce({longitude: 123.456});
    const res = await eventAPI.getAttributeOfSchedule('longitude', 1);
    expect(res).toEqual(123.456);
  });
});
describe('[EventAPI.getAttributeOfEvent]', () => {
  test('throws error if eventId is not passed', async () => {
    expect(eventAPI.getAttributeOfEvent()).rejects.toThrow(
        eventIdIsNotPassedMessage);
  });

  test('returns null when passed invalid eventId', async () => {
    mockStore.Event.findOne.mockReturnValueOnce(null);
    const res = await eventAPI.getAttributeOfEvent('title', 987654321);
    expect(res).toEqual(null);
  });

  test('looks up type', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({type: 0});
    const res = await eventAPI.getAttributeOfEvent('type', 1);
    expect(res).toEqual(0);
  });

  test('looks up creationTime', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({createdAt: new Date('2020-01-29')});
    const res = await eventAPI.getAttributeOfEvent('creationTime', 1);
    expect(res - new Date('2020-01-29')).toEqual(0);
  });

  test('looks up lastUpdatedTime', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({updatedAt: new Date('2020-01-29')});
    const res = await eventAPI.getAttributeOfEvent('lastUpdatedTime', 1);
    expect(res - new Date('2020-01-29')).toEqual(0);
  });

  test('looks up title', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({title: 'Sihyun Event'});
    const res = await eventAPI.getAttributeOfEvent('title', 1);
    expect(res).toEqual('Sihyun Event');
  });

  test('looks up description', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({description: 'This is Sihyun event'});
    const res = await eventAPI.getAttributeOfEvent('description', 1);
    expect(res).toEqual('This is Sihyun event');
  });

  test('looks up price', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({price: 1000});
    const res = await eventAPI.getAttributeOfEvent('price', 1);
    expect(res).toEqual(1000);
  });

  test('looks up thumbnailUrl', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({thumbnailUrl: 'http://lsh9034'});
    const res = await eventAPI.getAttributeOfEvent('thumbnailUrl', 1);
    expect(res).toEqual('http://lsh9034');
  });

  test('looks up maxParticipantNum', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({maxParticipantNum: 20});
    const res = await eventAPI.getAttributeOfEvent('maxParticipantNum', 1);
    expect(res).toEqual(20);
  });

  test('looks up hostId', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({hostId: 18});
    const res = await eventAPI.getHostIdOfEvent({eventId: 1});
    expect(res).toEqual(18);
  });

  test('looks up bookTitle', async () => {
    mockStore.EventBookClub.findOne.mockReturnValueOnce({bookTitle: 'test book title'});
    const res = await eventAPI.getAttributeOfEvent('bookTitle', 1);
    expect(res).toEqual('test book title');
  });

  test('looks up bookAuthor', async () => {
    mockStore.EventBookClub.findOne.mockReturnValueOnce({bookAuthor: 'Sihyun Lee'});
    const res = await eventAPI.getAttributeOfEvent('bookAuthor', 1);
    expect(res).toEqual('Sihyun Lee');
  });

  test('looks up bookDescription', async () => {
    mockStore.EventBookClub.findOne.mockReturnValueOnce({bookDescription: 'This is Sihyun book'});
    const res = await eventAPI.getAttributeOfEvent('bookDescription', 1);
    expect(res).toEqual('This is Sihyun book');
  });

  test('looks up bookISBN', async () => {
    mockStore.EventBookClub.findOne.mockReturnValueOnce({bookISBN: '987654321123456789'});
    const res = await eventAPI.getAttributeOfEvent('bookISBN', 1);
    expect(res).toEqual('987654321123456789');
  });

  test('looks up bookImageUrl', async () => {
    mockStore.EventBookClub.findOne.mockReturnValueOnce({bookImageUrl: 'http://lsh9034'});
    const res = await eventAPI.getAttributeOfEvent('bookImageUrl', 1);
    expect(res).toEqual('http://lsh9034');
  });
});

describe('[EventAPI.getAttributeOfEventParticipant]', () => {
  test('throws error if eventId and userId is not passed', async () => {
    expect(eventAPI.getAttributeOfEventParticipant('')).rejects.toThrow(
        eventIdIsNotPassedMessage);
  });

  test('throws error if eventId is not passed', async () => {
    expect(eventAPI.getAttributeOfEventParticipant('', null, 1)).
        rejects.
        toThrow(
            eventIdIsNotPassedMessage);
  });

  test('throws error if userId is not passed', async () => {
    expect(eventAPI.getAttributeOfEventParticipant('', 1)).rejects.toThrow(
        userIdIsNotPassedMessage);
  });

  test('returns null when passed invalid eventId', async () => {
    mockStore.EventParticipant.findOne.mockReturnValueOnce(null);
    const res = await eventAPI.getAttributeOfEventParticipant('userId',
        987654321, 1);
    expect(res).toEqual(null);
  });

  test('returns null when passed invalid scheduleId', async () => {
    mockStore.EventParticipant.findOne.mockReturnValueOnce(null);
    const res = await eventAPI.getAttributeOfEventParticipant('userId', 1,
        987654321);
    expect(res).toEqual(null);
  });

  test('looks up eventId', async () => {
    mockStore.EventParticipant.findOne.mockReturnValueOnce({eventId: 1});
    const res = await eventAPI.getAttributeOfEventParticipant('eventId', 1, 2);
    expect(res).toEqual(1);
  });

  test('looks up userId', async () => {
    mockStore.EventParticipant.findOne.mockReturnValueOnce({userId: 2});
    const res = await eventAPI.getAttributeOfEventParticipant('userId', 1, 2);
    expect(res).toEqual(2);
  });
});

describe('[EventAPI.getHostIdOfEvent]', () => {
  test('throws error if eventId is not passed', async () => {
    expect(eventAPI.getHostIdOfEvent({})).rejects.toThrow(
        eventIdIsNotPassedMessage);
  });

  test('returns null when passed invalid eventId', async () => {
    mockStore.Event.findOne.mockReturnValueOnce(null);
    const res = await eventAPI.getHostIdOfEvent({eventId: 987654321});
    expect(res).toEqual(null);
  });

  test('looks up hostId', async () => {
    mockStore.Event.findOne.mockReturnValueOnce({hostId: 2});
    const res = await eventAPI.getHostIdOfEvent({eventId: 1});
    expect(res).toEqual(2);
  });
});

describe('[EventAPI.getParticipantIdsOfEvent]', () => {
  test('throws error if eventId is not passed', async () => {
    expect(eventAPI.getParticipantIdsOfEvent({})).rejects.toThrow(
        eventIdIsNotPassedMessage);
  });

  test('returns empty array when passed invalid eventId', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([]);
    const res = await eventAPI.getParticipantIdsOfEvent({eventId: 987654321});
    expect(res).toEqual([]);
  });

  test('looks up hostId', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([{hostId: 1}, {hostId: 2}]);
    const res = await eventAPI.getParticipantIdsOfEvent({eventId: 1});
    expect(res).toEqual([{hostId: 1}, {hostId: 2}]);
  });
});

describe('[EventAPI.getScheduleIdsOfEvent]', () => {
  test('throws error if eventId is not passed', async () => {
    expect(eventAPI.getScheduleIdsOfEvent({})).rejects.toThrow(
        eventIdIsNotPassedMessage);
  });

  test('returns null when passed invalid eventId', async () => {
    mockStore.Schedule.findAll.mockReturnValueOnce([]);
    const res = await eventAPI.getScheduleIdsOfEvent({eventId: 987654321});
    expect(res).toEqual([]);
  });

  test('looks up eventId', async () => {
    mockStore.Schedule.findAll.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await eventAPI.getScheduleIdsOfEvent({eventId: 1});
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });
});

describe('[EventAPI.getEventIdsOfTag]', () => {
  test('throws error if tagId is not passed', async () => {
    expect(eventAPI.getEventIdsOfTag({})).rejects.toThrow(
        tagIdIsNotPassedMessage);
  });

  test('returns null when passed invalid tagId', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([]);
    const res = await eventAPI.getEventIdsOfTag({tagId: 987654321});
    expect(res).toEqual([]);
  });

  test('looks up eventId', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([{eventId: 1}, {eventId: 2}]);
    const res = await eventAPI.getEventIdsOfTag({tagId: 1});
    expect(res).toEqual([{eventId: 1}, {eventId: 2}]);
  });
});

describe('[EventAPI.getIdsOfEvent]', () => {
  test('throws error if offset or offset is negative', async () => {
    expect(eventAPI.getIdsOfEvent({offset: -1, limit: 1, tagIds: [1]})).rejects.toThrow(
        notValidValueMessage);
  });

  test('throws error if limit or offset is negative', async () => {
    expect(eventAPI.getIdsOfEvent({offset: 1, limit: -1, tagIds: [1]})).rejects.toThrow(
        notValidValueMessage);
  });

  test('returns empty array when passed invalid tagId', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([]);
    const res = await eventAPI.getIdsOfEvent({limit: 1, offset: 1, tagIds: [987654321]});
    expect(res).toEqual([]);
  });

  test('returns array which contain all element matched tag when limit has not been passed', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([{eventId: 1}, {eventId: 2}]);
    const res = await eventAPI.getIdsOfEvent({offset: 0, tagIds: [1]});
    expect(res).toEqual([{eventId: 1}, {eventId: 2}]);
  });

  test('looks up eventIds', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([{event: 1}, {event: 2}]);
    const res = await eventAPI.getIdsOfEvent({offset: 0, limit: 2, tagIds: [1]});
    expect(res).toEqual([{event: 1}, {event: 2}]);
  });

  test('looks up array which contain all element when tagIds has not been passed', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([{event: 1}, {event: 2}]);
    const res = await eventAPI.getIdsOfEvent({offset: 0, limit: 2});
    expect(res).toEqual([{event: 1}, {event: 2}]);
  });
});

describe('[EventAPI.getUpcomingEventIdsOfEvent]', () => {
  test('throws error if userId is not passed', async () => {
    expect(eventAPI.getUpcomingEventIdsOfEvent({})).rejects.toThrow(
        userIdIsNotPassedMessage);
  });

  test('returns empty array when passed invalid userId', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([]);
    mockStore.Schedule.findAll.mockReturnValueOnce([]);
    const res = await eventAPI.getUpcomingEventIdsOfEvent({userId: 987654321});
    expect(res).toEqual([]);
  });

  test('looks up eventIds', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([{eventId: 1}, {eventId: 2}]);
    mockStore.Schedule.findAll.mockReturnValueOnce([{eventId: 1}]);
    const res = await eventAPI.getUpcomingEventIdsOfEvent({userId: 1});
    expect(res).toEqual([{eventId: 1}]);
  });
});

describe('[EventAPI.getPastEventIdsOfEvent]', () => {
  test('throws error if userId is not passed', async () => {
    expect(eventAPI.getPastEventIdsOfEvent({})).rejects.toThrow(
        userIdIsNotPassedMessage);
  });

  test('returns empty array when passed invalid userId', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([]);
    mockStore.Schedule.findAll.mockReturnValueOnce([]);
    const res = await eventAPI.getPastEventIdsOfEvent({userId: 987654321});
    expect(res).toEqual([]);
  });

  test('looks up eventIds', async () => {
    mockStore.EventParticipant.findAll.mockReturnValueOnce([{eventId: 1}, {eventId: 2}]);
    mockStore.Schedule.findAll.mockReturnValueOnce([{eventId: 1}]);
    const res = await eventAPI.getPastEventIdsOfEvent({userId: 1});
    expect(res).toEqual([{eventId: 1}]);
  });
});
