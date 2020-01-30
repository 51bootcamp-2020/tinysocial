const {EventBookClub} = require('../../resolvers');
const {mockContext} = require('../mockContext');

const {getAttributeOfEvent, getScheduleIdsOfEvent, getParticipantIdsOfEvent} = mockContext.dataSources.eventAPI;
const {getTagIdsOfEvent} = mockContext.dataSources.tagAPI;
describe('[EventBookClubResolver]', () => {
  test('returns host', async () => {
    getAttributeOfEvent.mockReturnValueOnce(1);
    const res = await EventBookClub.host({id: 1}, {}, mockContext);
    expect(res).toBe(1);
  });
  test('returns thumbnailUrl', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClub');
    const res = await EventBookClub.thumbnailUrl({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClub');
  });
  test('returns creationTime', async () => {
    getAttributeOfEvent.mockReturnValueOnce(new Date('2019-10-25 15:14:13'));
    const res = await EventBookClub.creationTime({id: 1}, {}, mockContext);
    expect(res).toEqual(new Date('2019-10-25 15:14:13'));
  });
  test('returns lastUpdatedTime', async () => {
    getAttributeOfEvent.mockReturnValueOnce(new Date('2019-10-25 15:14:13'));
    const res = await EventBookClub.lastUpdatedTime({id: 1}, {}, mockContext);
    expect(res).toEqual(new Date('2019-10-25 15:14:13'));
  });
  test('returns scheduleIds', async () => {
    getScheduleIdsOfEvent.mockReturnValueOnce([{id: 1}]);
    const res = await EventBookClub.schedule({id: 1}, {}, mockContext);
    expect(res).toEqual([{id: 1}]);
  });
  test('returns title', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubTitle1');
    const res = await EventBookClub.title({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubTitle1');
  });
  test('returns description', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubDescription1');
    const res = await EventBookClub.description({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubDescription');
  });
  test('returns price', async () => {
    getAttributeOfEvent.mockReturnValueOnce(1);
    const res = await EventBookClub.price({id: 1}, {}, mockContext);
    expect(res).toBe(1);
  });
  test('returns bookImageUrl', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubBookImageUrl1');
    const res = await EventBookClub.bookImageUrl({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubBookImageUrl1');
  });
  test('returns bookTitle', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubBookTitle1');
    const res = await EventBookClub.bookTitle({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubBookTitle1');
  });
  test('returns bookAuthor', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubBookAuthor1');
    const res = await EventBookClub.bookAuthor({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubBookAuthor1');
  });
  test('returns bookDescription', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubBookDescription1');
    const res = await EventBookClub.bookDescription({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubBookDescription1');
  });
  test('returns bookISBN', async () => {
    getAttributeOfEvent.mockReturnValueOnce('ThisIsEventBookClubBookISBN1');
    const res = await EventBookClub.bookISBN({id: 1}, {}, mockContext);
    expect(res).toBe('ThisIsEventBookClubBookISBN1');
  });
  test('returns tags', async () => {
    getTagIdsOfEvent.mockReturnValueOnce([{tagId: 1}]);
    const res = await EventBookClub.tags({id: 1}, {}, mockContext);
    expect(res).toEqual([{tagId: 1}]);
  });
  test('returns participants', async () => {
    getParticipantIdsOfEvent.mockReturnValueOnce([{userId: 1}]);
    const res = await EventBookClub.participants({id: 1}, {}, mockContext);
    expect(res).toBe([{userId: 1}]);
  });
  test('returns maxParticipantNum', async () => {
    getAttributeOfEvent.mockReturnValueOnce(5);
    const res = await EventBookClub.maxParticipantNum({id: 1}, {}, mockContext);
    expect(res).toBe(5);
  });
  // TODO(yun-kwak): Implement reviews resolver unit test
});
