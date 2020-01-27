module.exports.Query = {
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

  userEvents: async (_, {upcomingOrPast}, {dataSources, userId}) => {
    let eventIds;
    if (upcomingOrPast === 'upcoming') {
      eventIds = await dataSources.eventAPI.getUpcomingEventIdsOfEvent(userId);
    } else if (upcomingOrPast === 'past') {
      eventIds = await dataSources.eventAPI.getPastEventIdsOfEvent(userId);
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
    const reviews = await dataSources.reviewAPI.getIdsOfReview({userId, eventId});
    return reviews;
  },
};
