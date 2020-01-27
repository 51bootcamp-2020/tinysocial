module.exports.EventBookClub = {
  host: async ({id}, _, {dataSources}) => {
    const hostId = dataSources.eventAPI.getHostIdOfEvent({eventId: id});
    return hostId;
  },
  thumbnailUrl: async ({id}, _, {dataSources}) => {
    const thumbnailUrl = dataSources.eventAPI.getThumbnailUrlOfEvent(id);
    return thumbnailUrl;
  },
  creationTime: async ({id}, _, {dataSources}) => {
    const creationTime = dataSources.eventAPI.getCreationTimeOfEvent(id);
    return creationTime;
  },
  lastUpdatedTime: async ({id}, _, {dataSources}) => {
    const lastUpdatedTime = dataSources.eventAPI.getLastUpdatedTime(id);
    return lastUpdatedTime;
  },
  schedule: async ({id}, _, {dataSources}) => {
    const scheduleIds = dataSources.eventAPI.getScheduleIdsOfEvent({eventId: id});
    return scheduleIds;
  },
  title: async ({id}, _, {dataSources}) => {
    const title = dataSources.eventAPI.getTitleOfEvent(id);
    return title;
  },
  description: async ({id}, _, {dataSources}) => {
    const description = dataSources.eventAPI.getDescriptionOfEvent(id);
    return description;
  },
  price: async ({id}, _, {dataSources}) => {
    const price = dataSources.eventAPI.getPriceOfEvent(id);
    return price;
  },
  bookImageUrl: async ({id}, _, {dataSources}) => {
    const bookImageUrl = dataSources.eventAPI.getBookImgageUrlOfEvent(id);
    return bookImageUrl;
  },
  bookTitle: async ({id}, _, {dataSources}) => {
    const bookTitle = dataSources.eventAPI.getBookTitleOfEvent(id);
    return bookTitle;
  },
  bookAuthor: async ({id}, _, {dataSources}) => {
    const bookAuthor = dataSources.eventAPI.getBookAuthorOfEvent(id);
    return bookAuthor;
  },
  bookDescription: async ({id}, _, {dataSources}) => {
    const bookDescription = dataSources.eventAPI.getBookDescriptionOfEvent(id);
    return bookDescription;
  },
  bookISBN: async ({id}, _, {dataSources}) => {
    const bookISBN = dataSources.eventAPI.getBookISBNOfEvent(id);
    return bookISBN;
  },

  tags: async ({id}, __, {dataSources}) => {
    const tagIds = dataSources.eventAPI.getTagIdsOfEvent({eventId: id});
    return tagIds;
  },
  participants: async ({id}, __, {dataSources}) => {
    const participantIds = dataSources.eventAPI.getParticipantIdsOfEvent({eventId: id});
    return participantIds;
  },
  maxParticipantNum: async ({id}, _, {dataSources}) => {
    const maxParticipantNum = dataSources.eventAPI.getMaxParticipantNumOfEvent(id);
    return maxParticipantNum;
  },
  reviews: async ({id}, {userIds}, {userId}) =>{
    if (userIds === undefined) {
      userIds = userId;
    }
    return {eventId: id, userId: userIds};
  },
};
