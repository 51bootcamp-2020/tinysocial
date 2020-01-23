module.exports.Query = {
  events: async (_, {pageSize, after}) => { },
  event: async (_, {id}) => { },
  me: async (_, __, context) => { },
  user: async (_, {id}) => { },
  upcomingEvents: async (_, {userId}, {dataSources}) => {
    const events = await dataSources.mainAPI.getUserUpcomingEvents({userId});
    if (events === undefined) {
      return null;
    }
    return events;
  },
  pastEvents: async (_, {userId}, {dataSources}) => {
    const events = await dataSources.mainAPI.getUserPastEvents({userId});
    if (events === undefined) {
      return null;
    }
    return events;
  },
  getUserReviews: async (
    _, {userId, eventId}, {dataSources, userId: currentUserId},
  ) => {
    if (userId === undefined) {
      userId = currentUserId;
    }
    const reviews = await dataSources.mainAPI.getUserReviews({userId, eventId});
    if (reviews === undefined) {
      return null;
    }
    return reviews;
  },
};
