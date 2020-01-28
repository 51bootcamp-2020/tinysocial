const {ReviewAPI} = require('../reviewAPI');
const {mockStore} = require('./mockStore');

const reviewAPI = new ReviewAPI(mockStore);
reviewAPI.initialize({context: {userId: 1}});

describe('[ReviewAPI.getTitleOfReview', () => {
  test('looks up title of review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({title: 'ThisIsReviewTitle1'});
    const res = await reviewAPI.getTitleOfReview({userId: 1, eventId: 1});
    expect(res).toEqual('ThisIsReviewTitle1');
  });
  test('returns null for invalid input', async () => {
    mockStore.Review.findOne.mockReturnValueOnce(null);
    const res = await reviewAPI.getTitleOfReview({userId: 22, eventId: 22});
    expect(res).toEqual(null);    
  });
});

describe('[ReviewAPI.getContentOfReview', () => {
  test('looks up content of review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({content: 'ThisIsReviewContent1'});
    const res = await reviewAPI.getContentOfReview({userId: 1, eventId: 1});
    expect(res).toEqual('ThisIsReviewContent1');
  });
  test('returns null for invalid input', async () => {
    mockStore.Review.findOne.mockReturnValueOnce(null);
    const res = await reviewAPI.getContentOfReview({userId: 22, eventId: 22});
    expect(res).toEqual(null);    
  });
});

describe('[ReviewAPI.getIsPublicOfReview', () => {
  test('looks up isPublic of review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({isPublic: true});
    const res = await reviewAPI.getIsPublicOfReview({userId: 1, eventId: 1});
    expect(res).toBe(true);
  });
  test('returns null for invalid input', async () => {
    mockStore.Review.findOne.mockReturnValueOnce(null);
    const res = await reviewAPI.getContentOfReview({userId: 22, eventId: 22});
    expect(res).toEqual(null);
  });
});

describe('[ReviewAPI.getIdsOfReview', () => {
  test('looks up userId and EventId of review', async () => {
    mockStore.Review.findAll.mockReturnValueOnce([{userId: 1, eventId: 1}]);
    const res = await reviewAPI.getIdsOfReview({userId: 1, eventId: 1});
    expect(res).toEqual([{userId: 1, eventId: 1}]);
  });
  test('returns null for invalid input', async () => {
    mockStore.Review.findAll.mockReturnValueOnce(null);
    const res = await reviewAPI.getIdsOfReview({userId: 22, eventId: 22});
    expect(res).toEqual(null);
  });
});

describe('[ReviewAPI.createOrModifyReview', () => {
  test('create review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce(null);
    const res = await reviewAPI.createOrModifyOfReview({userId: 1010, eventId: 10102, title: 'testTitle', content: 'testContent', isPublic: true});
    expect(res).toEqual({userId: 1010, eventId: 10102})
  });
  test('modify review', async() => {
    mockStore.Review.findOne.mockReturnValueOnce({userId: 1, eventId: 1, title: 'ThisIsReviewTitle1', content: 'ThisIsReviewContent1', isPublic: true, save: jest.fn()});
    const res = await reviewAPI.createOrModifyOfReview({userId: 1, eventId: 1, title: 'testTitle', content: 'testContent', isPublic: true});
    expect(res).toEqual({userId: 1, eventId: 1});
  })
})