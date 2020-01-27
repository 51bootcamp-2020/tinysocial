module.exports.Event = {
  __resolveType(event, context, info) {
    if (event.bookTitle) {
      return 'EventBookClub';
    }
    throw new Error('Data cannot be resolved to any Event type. Please contact to backend developers.');
  },
};
