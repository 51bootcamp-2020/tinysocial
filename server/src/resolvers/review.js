module.exports.Review = {
  title: async ({userId, eventId}, _, {dataSources}) => {
    const title = dataSources.reviewAPI.getTitleOfReview({userId, eventId});
    return title;
  },
  content: async ({userId, eventId}, _, {dataSources}) => {
    const content = dataSources.reviewAPI.getContentOfReview({userId, eventId});
    return content;
  },
  author: async ({userId, eventId}) => {
    return {
      id: userId,
    };
  },
  isPublic: async ({userId, eventId}, _, {dataSources}) => {
    const isPublic = dataSources.reviewAPI.getIsPublicOfReview(
        {userId, eventId});
    return isPublic;
  },
};
