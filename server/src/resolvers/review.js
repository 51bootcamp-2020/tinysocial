module.exports.Review = {
  title: async ({userId, eventId}, __, {dataSources}) => {
    const title = dataSources.reviewAPI.getTitleOfReview({userId, eventId});
    return title;
  },
  content: async ({userId, eventId}, __, {dataSources}) => {
    const content = dataSources.reviewAPI.getContentOfReview({userId, eventId});
    return content;
  },
  author: async ({userId, eventId}, __, {dataSources}) => {
    const author = dataSources.userAPI.getAuthorOfReview({userId, eventId});
    return author;
  },
  isPublic: async ({userId, eventId}, __, {dataSources}) => {
    const isPublic = dataSources.reviewAPI.getIsPublicOfReview({userId, eventId});
    return isPublic;
  },
};
