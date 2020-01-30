const {Review} = require('../../resolvers');
const {mockContext} = require('../mockContext');

const {getAttributeOfReview, createOrModifyOfReview} = mockContext.dataSources.reviewAPI;

describe('[ReviewResolver]', () => {
  test('returns title', async () => {
    getAttributeOfReview.mockReturnValueOnce('ThisIsReviewTitle1');
    const res = await Review.title({userId: 1, eventId: 1}, {}, mockContext);
    expect(res).toBe('ThisIsReviewTitle1');
  });
  test('returns content', async () => {
    getAttributeOfReview.mockReturnValueOnce('ThisIsReviewContent1');
    const res = await Review.content({userId: 1, eventId: 1}, {}, mockContext);
    expect(res).toBe('ThisIsReviewContent1');
  });
  test('returns author', async () => {
    getAttributeOfReview.mockReturnValueOnce(1);
    const res = await Review.author({userId: 1, eventId: 1}, {}, mockContext);
    expect(res).toBe(1);
  });
  test('returns isPublic', async () => {
    getAttributeOfReview.mockReturnValueOnce(true);
    const res = await Review.isPublic({userId: 1, eventId: 1}, {}, mockContext);
    expect(res).toBe(true);
  });
});
