module.exports.Review = {
  title: async ({userId, eventId}, _, {dataSources}) => {
    const title = dataSources.reviewAPI.getAttributeOfReview(
        'title',
        userId,
        eventId,
    );
    return title;
  },
  content: async ({userId, eventId}, _, {dataSources}) => {
    const content = dataSources.reviewAPI.getAttributeOfReview(
        'content',
        userId,
        eventId,
    );
    return content;
  },
  author: async ({userId}) => {
    return {id: userId};
  },
  isPublic: async ({userId, eventId}, _, {dataSources}) => {
    const isPublic = dataSources.reviewAPI.getAttributeOfReview(
        'isPublic',
        userId,
        eventId,
    );
    return isPublic;
  },
};
