module.exports.Review = {
  title: async ({userId, eventId}, _, {dataSources}) => {
    const title = dataSources.reviewAPI.getAttributeOfReview('title', userId, eventId);
    return title;
  },
  content: async ({userId, eventId}, _, {dataSources}) => {
    const content = dataSources.reviewAPI.getAttributeOfReview('content', userId, eventId);
    return content;
  },
  author: async ({userId, eventId}, _, {dataSources}) => {
    const author = dataSources.reviewAPI.getAttributeOfReview('author', userId, eventId);
    return author;
  },
  isPublic: async ({userId, eventId}, _, {dataSources}) => {
    const isPublic = dataSources.reviewAPI.getAttributeOfReview(
        'isPublic', userId, eventId);
    return isPublic;
  },
};
