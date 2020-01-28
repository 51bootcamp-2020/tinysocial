const {ReviewAPI} = require('../reviewAPI');
const {mockStore} = require('./mockStore');

const reviewAPI = new ReviewAPI(mockStore);
reviewAPI.initialize({context: {userId: 1}});

describe('[ReviewAPI.getTitleOfReview', () => {
  test('looks up title of review', async () => {
    mockStore.Review.findOne.mockReturnValueOnce({title: 'ThisIsReviewTitle1'});
    const res = await reviewAPI.getTitleOfReview({userId: 1, eventId: 1});
    expect(res).toEqual({title: 'ThisIsReviewTitle1'});
  });
})