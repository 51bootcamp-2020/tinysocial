module.exports.Query = {
  // TODO(lsh9034): fix eventSort
  events: async (
    _, {pageSize, after = 0, eventFilter, eventSort}, {dataSources}) => {
    if (pageSize > 50) {
      pageSize = 50;
    }
    let eventIds = [];
    if (eventFilter !== undefined && eventFilter !== null) {
      eventIds = await dataSources.eventAPI.getIdsOfEvent({
        limit: pageSize,
        offset: after,
        tagIds: eventFilter.tagIds,
        order: eventSort,
      });
      if (pageSize > eventIds.length) {
        pageSize = eventIds.length;
      }
    } else {
      eventIds = await dataSources.eventAPI.getIdsOfEvent({
        limit: pageSize,
        offset: after,
        order: eventSort,
      });
      pageSize = eventIds.length;
    }
    return {
      cursor: after + pageSize,
      events: eventIds,
    };
  },

  event: async (_, {id}) => {
    return {id};
  },

  me: async (_, __, {userId}) => {
    return {id: userId};
  },

  user: async (_, {userId}) => {
    return {id: userId};
  },

  myEvents: async (_, {upcomingOrPast}, {dataSources, userId}) => {
    let eventIds;
    if (upcomingOrPast === 'upcoming') {
      eventIds = dataSources.eventAPI.getUpcomingEventIdsOfEvent({userId});
    } else if (upcomingOrPast === 'past') {
      eventIds = dataSources.eventAPI.getPastEventIdsOfEvent({userId});
    } else {
      return null;
    }
    if (eventIds === null) {
      return null;
    }
    return eventIds;
  },

  userReviews: async (
    _, {userId, eventId}, {dataSources, userId: currentUserId}) => {
    if (userId === undefined) {
      userId = currentUserId;
    }
    const reviews = dataSources.reviewAPI.getIdsOfReview({userId, eventId});
    return reviews;
  },

  tagNames: async (_, {pageSize, after = 0}, {dataSources}) => {
    const tagIds = await dataSources.tagAPI.getIdsOfTag({
      limit: pageSize,
      offset: after,
    });
    if (pageSize > tagIds.length) {
      pageSize = tagIds.length;
    }
    return {
      cursor: after + pageSize,
      tags: tagIds,
    };
  },
};
