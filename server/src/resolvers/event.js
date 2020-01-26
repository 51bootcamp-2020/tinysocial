module.exports.Event = {
  __resolveType(event, context, info) {
    if (event.bookTitle) {
      return 'EventBookClub';
    }
    // if you want test about only Event type Data, change 'EventBookClub'
    return null;
  },
};
