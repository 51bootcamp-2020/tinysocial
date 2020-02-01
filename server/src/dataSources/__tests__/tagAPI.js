const {TagAPI} = require('../tagAPI');
const {mockStore} = require('../mockStore');
const {
  eventIdIsNotPassedMessage,
  tagIdIsNotPassedMessage,
  scheduleIdIsNotPassedMessage,
} = require('../../errorMessages');

const tagAPI = new TagAPI(mockStore);
tagAPI.initialize({context: {user: {id: 1}}});

describe('[tagAPI.getAttributeOfTag]', () => {
  test('throws error if tagId is not passed', async () => {
    expect(tagAPI.getAttributeOfTag()).rejects.toThrow(
        tagIdIsNotPassedMessage);
  });

  test('looks up tag name', async () => {
    mockStore.Tag.findOne.mockReturnValueOnce({name: 'science'});
    const res = await tagAPI.getAttributeOfTag('name', 1);
    expect(res).toEqual('science');
  });
});

describe('[tagAPI.getIdsOfTag]', () => {
  test('returns array which contain all element when offset & limit have not been passed', async () => {
    mockStore.Tag.findAll.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await tagAPI.getIdsOfTag({});
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });

  test('looks up array', async () => {
    mockStore.Tag.findAll.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await tagAPI.getIdsOfTag({limit: 2, offset: 0});
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });
});

describe('[tagAPI.getTagIdsOfEvent]', () => {
  test('throws error if tagId is not passed', async () => {
    expect(tagAPI.getTagIdsOfEvent({})).rejects.toThrow(
        tagIdIsNotPassedMessage);
  });

  test('looks up array', async () => {
    mockStore.EventTag.findAll.mockReturnValueOnce([{id: 1}, {id: 2}]);
    const res = await tagAPI.getTagIdsOfEvent({eventId: 1});
    expect(res).toEqual([{id: 1}, {id: 2}]);
  });
});
