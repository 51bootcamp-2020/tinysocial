module.exports.EventBookClub = {
  host: async (parent, __, {dataSources}) => {
    const host = await dataSources.mainAPI.getHostFromEvent(parent.hostId);
    return host;
  },
  schedule: async (parent, __, {dataSources}) => {
    const schedule = await dataSources.mainAPI.getScheduleFromEvent(parent.id);
    return schedule;
  },
  tags: async (parent, __, {dataSources}) => {
    const tags = await dataSources.mainAPI.getTagsFromEvent(parent.id);
    return tags;
  },
  participants: async (parent, __, {dataSources}) => {
    const participants = await dataSources.mainAPI.getParticipantsFromEvent(parent.id);
    return participants;
  },
  reviews: async (parent, {userId}, {dataSources, userId: currentUserId}) => {
    const eventId = parent.id;
    let reviews;
    if (userId === null) {
      reviews = await dataSources.mainAPI.getReviewFromEvent({eventId, currentUserId});
    }
    return reviews;
  },
};
