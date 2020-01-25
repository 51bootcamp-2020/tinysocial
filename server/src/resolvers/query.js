const jwt = require('jsonwebtoken');

module.exports.Query = {
  events: async (_, {pageSize = undefined, after = undefined, eventFilter, eventSort}, {dataSources, userId}) => {
    const token = jwt.sign({id: 321}, 'lsh9034', {expiresIn: '100h'});
    const id = jwt.verify(token, 'lsh9034');
    console.log('jwtid', id);
    let eventsId;
    if (eventFilter!==undefined) {
      if (eventFilter.tags!==undefined) {
        eventsId = await dataSources.mainAPI.findEventsIdByTag(
            eventFilter.tags, after, pageSize, []);
      }
      if (eventFilter.recommendation!==undefined) {
        // TODO(lsh9034):implement recommend function
      }
    } else {
      eventsId = await dataSources.mainAPI.findEventsIdByNothing(
          after, pageSize);
    }
    return {
      cursor: after+pageSize,
      eventsId: eventsId,
    };
  },
  event: async (_, {id}) => { },
  me: async (_, __, context) => { },
  user: async (_, {id}) => { },
  userEvents: async (_, {upcomingOrPast}, {dataSources, userId}) => {
    let events;
    if (upcomingOrPast === 'upcoming') {
      events = await dataSources.mainAPI.getUserUpcomingEvents({userId});
    } else if (upcomingOrPast === 'past') {
      events = await dataSources.mainAPI.getUserPastEvents({userId});
    } else {
      return null;
    }
    if (events === null) {
      return null;
    }
    const result = await Promise.all(events.map((event) => {
      switch (event.type) {
        case 0:
          return dataSources.mainAPI.getBookClubEvent(event);
      }
    }));
    return result;
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
