module.exports.Review = {
  author: async (parent, __, {dataSources}) => {
    const author = await dataSources.mainAPI.getAuthorFromReview(parent.userId);
    return author;
  },
};
