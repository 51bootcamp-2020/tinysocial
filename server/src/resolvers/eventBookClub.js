module.exports.EventBookClub = {
  host: async ({id}, _, {dataSources}) => {
    const hostId = await dataSources.eventAPI.getAttributeOfEvent('hostId', id);
    return {id: hostId};
  },
  thumbnailUrl: async ({id}, _, {dataSources}) => {
    const thumbnailUrl = dataSources.eventAPI.getAttributeOfEvent('thumbnailUrl', id);
    return thumbnailUrl;
  },
  creationTime: async ({id}, _, {dataSources}) => {
    const creationTime = dataSources.eventAPI.getAttributeOfEvent('creationTime', id);
    return creationTime;
  },
  lastUpdatedTime: async ({id}, _, {dataSources}) => {
    const lastUpdatedTime = dataSources.eventAPI.getAttributeOfEvent('lastUpdatedTime', id);
    return lastUpdatedTime;
  },
  schedule: async ({id}, _, {dataSources}) => {
    const scheduleIds = await dataSources.eventAPI.getScheduleIdsOfEvent({eventId: id});
    return scheduleIds;
  },
  title: async ({id}, _, {dataSources}) => {
    const title = dataSources.eventAPI.getAttributeOfEvent('title', id);
    return title;
  },
  description: async ({id}, _, {dataSources}) => {
    const description = dataSources.eventAPI.getAttributeOfEvent('description', id);
    return description;
  },
  price: async ({id}, _, {dataSources}) => {
    const price = dataSources.eventAPI.getAttributeOfEvent('price', id);
    return price;
  },
  bookImageUrl: async ({id}, _, {dataSources}) => {
    const bookImageUrl = dataSources.eventAPI.getAttributeOfEvent('bookImageUrl', id);
    return bookImageUrl;
  },
  bookTitle: async ({id}, _, {dataSources}) => {
    const bookTitle = dataSources.eventAPI.getAttributeOfEvent('bookTitle', id);
    return bookTitle;
  },
  bookAuthor: async ({id}, _, {dataSources}) => {
    const bookAuthor = dataSources.eventAPI.getAttributeOfEvent('bookAuthor', id);
    return bookAuthor;
  },
  bookDescription: async ({id}, _, {dataSources}) => {
    const bookDescription = dataSources.eventAPI.getAttributeOfEvent('bookDescription', id);
    return bookDescription;
  },
  bookISBN: async ({id}, _, {dataSources}) => {
    const bookISBN = dataSources.eventAPI.getAttributeOfEvent('bookISBN', id);
    return bookISBN;
  },

  tags: async ({id}, __, {dataSources}) => {
    const tagIds = await dataSources.tagAPI.getTagIdsOfEvent({eventId: id});
    return tagIds;
  },
  participants: async ({id}, __, {dataSources}) => {
    const participantIds = dataSources.eventAPI.getParticipantIdsOfEvent({eventId: id});
    return participantIds;
  },
  maxParticipantNum: async ({id}, _, {dataSources}) => {
    const maxParticipantNum = dataSources.eventAPI.getAttributeOfEvent('maxParticipantNum', id);
    return maxParticipantNum;
  },
  // TODO(yun-kwak): Implement reviews resolver
  reviews: async ({id}, _, {dataSources}) =>{
    const reviews = dataSources.reviewAPI.getReviewsOfEvent({eventId: id});
    return reviews;
  },
};
