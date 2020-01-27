const EventTypes = require('../evnetTypes');

module.exports.EventBookClub = {
  host: async ({id}, _, {dataSources}) => {
    const hostId = dataSources.eventAPI.getHostIdOfEvent({eventId: id}, EventTypes.EVENTBOOKCLUB);
    return hostId;
  },
  thumbnailUrl: async ({id}, _, {dataSources}) => {
    const thumbnailUrl = dataSources.eventAPI.getThumbnailUrlOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return thumbnailUrl;
  },
  creationTime: async ({id}, _, {dataSources}) => {
    const creationTime = dataSources.eventAPI.getCreationTimeOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return creationTime;
  },
  lastUpdatedTime: async ({id}, _, {dataSources}) => {
    const lastUpdatedTime = dataSources.eventAPI.getLastUpdatedTime(id, EventTypes.EVENTBOOKCLUB);
    return lastUpdatedTime;
  },
  schedule: async ({id}, _, {dataSources}) => {
    const scheduleIds = dataSources.eventAPI.getScheduleIdsOfEvent({eventId: id}, EventTypes.EVENTBOOKCLUB);
    return scheduleIds;
  },
  title: async ({id}, _, {dataSources}) => {
    const title = dataSources.eventAPI.getTitleOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return title;
  },
  description: async ({id}, _, {dataSources}) => {
    const description = dataSources.eventAPI.getDescriptionOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return description;
  },
  price: async ({id}, _, {dataSources}) => {
    const price = dataSources.eventAPI.getPriceOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return price;
  },
  bookImageUrl: async ({id}, _, {dataSources}) => {
    const bookImageUrl = dataSources.eventAPI.getBookImgageUrlOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return bookImageUrl;
  },
  bookTitle: async ({id}, _, {dataSources}) => {
    const bookTitle = dataSources.eventAPI.getBookTitleOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return bookTitle;
  },
  bookAuthor: async ({id}, _, {dataSources}) => {
    const bookAuthor = dataSources.eventAPI.getBookAuthorOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return bookAuthor;
  },
  bookDescription: async ({id}, _, {dataSources}) => {
    const bookDescription = dataSources.eventAPI.getBookDescriptionOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return bookDescription;
  },
  bookISBN: async ({id}, _, {dataSources}) => {
    const bookISBN = dataSources.eventAPI.getBookISBNOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return bookISBN;
  },

  tags: async ({id}, __, {dataSources}) => {
    const tags = dataSources.eventAPI.getTagsOfEvent({eventId: id}, EventTypes.EVENTBOOKCLUB);
    return tags;
  },
  participants: async ({id}, __, {dataSources}) => {
    const participantIds = dataSources.eventAPI.getParticipantIdsOfEvent({eventId: id}, EventTypes.EVENTBOOKCLUB);
    return participantIds;
  },
  maxParticipantNum: async ({id}, _, {dataSources}) => {
    const maxParticipantNum = dataSources.eventAPI.getMaxParticipantNumOfEvent(id, EventTypes.EVENTBOOKCLUB);
    return maxParticipantNum;
  },
  reviews: async ({id}, {userIds}, {userId}) =>{
    if (userIds === undefined) {
      userIds = userId;
    }
    return {eventId: id, userId: userIds};
  },
};
