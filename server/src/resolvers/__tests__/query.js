const {Query} = require('../../resolvers');
const {mockContext} = require('../mockContext');

const {getIdsOfEvent, getPastEventIdsOfEvent, getUpcomingEventIdsOfEvent} =
mockContext.dataSources.eventAPI;
const {getIdsOfReview} = mockContext.dataSources.reviewAPI;
const {getIdsOfTag} = mockContext.dataSources.tagAPI;
describe('[Query]', () => {
  test('returns events', async () => {
    getIdsOfEvent.mockReturnValueOnce([{eventId: 1}]);
    const res = await Query.events({}, {pageSize: 1, after: 1, eventFilter: {recommendation: true, tagIds: [1, 2]}, eventSort: 0}, mockContext);
    expect(res).toEqual({cursor: 2, events: [{eventId: 1}]});
  });
  test('returns event', async () => {
    const res = await Query.event({}, {id: 1});
    expect(res).toEqual({id: 1});
  });
  test('returns me', async () => {
    const res = await Query.me({}, {}, {userId: 1});
    expect(res).toEqual({id: 1});
  });
  test('returns user', async () => {
    const res = await Query.user({}, {userId: 1});
    expect(res).toEqual({id: 1});
  });
  test('returns upcomingEvents', async () => {
    getUpcomingEventIdsOfEvent.mockReturnValueOnce([{eventId: 1}]);
    const res = await Query.myEvents({}, {upcomingOrPast: 'upcoming'}, mockContext);
    expect(res).toEqual([{eventId: 1}]);
  });
  test('returns pastEvents', async () => {
    getPastEventIdsOfEvent.mockReturnValueOnce([{eventId: 1}]);
    const res = await Query.myEvents({}, {upcomingOrPast: 'past'}, mockContext);
    expect(res).toEqual([{eventId: 1}]);
  });
  test('returns userReviews', async () => {
    getIdsOfReview.mockReturnValueOnce([{userId: 1, eventid: 1}]);
    const res = await Query.userReviews({}, {userId: 1, eventId: 1}, mockContext);
    expect(res).toEqual([{userId: 1, eventid: 1}]);
  });
  test('returns tagNames', async () => {
    getIdsOfTag.mockReturnValueOnce([{id: 1}]);
    const res = await Query.tagNames({}, {pageSize: 1, after: 1}, mockContext);
    expect({cursor: 2, tags: [{id: 1}]});
  });
});
