module.exports.Event = {
  __resolveType(event, context, info) {
    if (!event.bookTitle) {
      return null;
    }
    // if you want test Event type Data, change null to 'EventBookClub'
    return 'EventBookClub';
  },
};
