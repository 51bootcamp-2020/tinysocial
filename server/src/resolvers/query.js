module.exports.Query = {
  events: async (_, {pageSize, after, eventFilter, eventSort}, {dataSources}) => { },

  event: async (_, {id}, {dataSources}) => {
    const event = dataSources.eventAPI.getIdOfEvent(id);
    return event;
  },

  me: async (_, __, {userId}) => {
    return userId;
  },

  user: async (_, {userId}, {dataSources}) => {
    const user = dataSources.userAPI.getIdOfUser(userId);
    return user;
  },

  myEvents: async (_, {upcomingOrPast}, {dataSources, userId}) => {
    let eventIds;
    if (upcomingOrPast === 'upcoming') {
      eventIds = dataSources.eventAPI.getUpcomingEventIdsOfEvent(userId);
    } else if (upcomingOrPast === 'past') {
      eventIds = dataSources.eventAPI.getPastEventIdsOfEvent(userId);
    } else {
      return null;
    }
    if (eventIds === null) {
      return null;
    }
    return eventIds;
  },

  userReviews: async (_, {userId, eventId}, {dataSources, userId: currentUserId}) => {
    if (userId === undefined) {
      userId = currentUserId;
    }
    const reviews = dataSources.reviewAPI.getIdsOfReview({userId, eventId});
    return reviews;
  },

  tagNames: async (_, {pageSize, after}, {dataSources}) => { },
};
