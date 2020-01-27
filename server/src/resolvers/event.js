module.exports.Event = {
  __resolveType({id}, __, {dataSources}) {
    const type = dataSources.reviewAPI.getTitleOfReview(id);
    if (type === 0) {
      return 'EventBookClub';
    }
    throw new Error('Data cannot be resolved to any Event type. Please contact to backend developers.');
  },
};
