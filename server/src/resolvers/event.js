module.exports.Event = {
  __resolveType(event, context, info) {
    if (event.bookTitle) {
      return 'EventBookClub';
    }
    // if you want just test about only Event type Data, change 'EventBookClub'
    return null;
  },
};
