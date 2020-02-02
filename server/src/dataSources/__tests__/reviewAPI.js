const {
  ReviewAPI, userIdAndEventIdIsNotPassedMessage
} = require('../reviewAPI');
const {mockStore} = require('../mockStore');

const reviewAPI = new ReviewAPI(mockStore);
reviewAPI.initialize({context: {userId: 1}});

describe('[ReviewAPI.getAttributeOfReview]', () => {
  test('throws error if userId is not passed', async () => {
    expect(reviewAPI.getAttributeOfReview()).rejects.toThrow(
        userIdAndEventIdIsNotPassedMessage);
  });

  test('returns null if non-existing review\'s PK is passed', async () => {
    mockStore.Review.findOne.mockReturnValueOnce(null);
    const res = await reviewAPI.getAttributeOfReview('title', 42, 42);
    expect(res).toEqual(null);
  });

  test('throws error if non-existing attributeName is passed ', async () => {
    mockStore.Review.findOne.mockImplementationOnce(() => {
      throw new Error('Unknown column');
    });
    expect(reviewAPI.getAttributeOfReview('ids', 42, 42)).rejects.
        toThrow('Unknown column');
  });

  test('returns title if existing attributeName is passed ', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({title:
        'Yuval Noah Harari is GENIUS'});
    const res = await reviewAPI.getAttributeOfReview('title', 42, 42);
    expect(res).toEqual('Yuval Noah Harari is GENIUS');
  });

  test('returns content if existing attributeName is passed ', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({content:
        'Yuval Noah Harari is GENIUS'});
    const res = await reviewAPI.getAttributeOfReview('content', 42, 42);
    expect(res).toEqual('Yuval Noah Harari is GENIUS');
  });

  test('returns isPublic if existing attributeName is passed ', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({isPublic:
        true});
    const res = await reviewAPI.getAttributeOfReview('isPublic', 42, 42);
    expect(res).toEqual(true);
  });
});

describe('[ReviewAPI.createOrModifyReview', () => {
  test('create review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce(null);
    const res = await reviewAPI.createOrModifyOfReview({
      userId: 1010,
      eventId: 10102,
      title: 'testTitle',
      content: 'testContent',
      isPublic: true,
    });
    expect(res).toEqual({userId: 1010, eventId: 10102});
  });
  test('modify review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({
      userId: 1,
      eventId: 1,
      title: 'ThisIsReviewTitle1',
      content: 'ThisIsReviewContent1',
      isPublic: true,
      save: jest.fn()
    });
    const res = await reviewAPI.createOrModifyOfReview({
      userId: 1,
      eventId: 1,
      title: 'testTitle',
      content: 'testContent',
      isPublic: true,
    });
    expect(res).toEqual({userId: 1, eventId: 1});
  });
});
