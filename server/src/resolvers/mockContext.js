module.exports.mockContext = {
  dataSources: {
    authAPI: { },
    eventAPI: {
      getAttributeOfSchedule: jest.fn(),
      getTypeOfEvent: jest.fn(),
      getAttributeOfEvent: jest.fn(),
      getScheduleIdsOfEvent: jest.fn(),
      getEventIdsOfTag: jest.fn(),
      getParticipantIdsOfEvent: jest.fn(),
      getHostedEventIdsOfUser: jest.fn(),
      getParticipatedEventIdsOfUser: jest.fn(),
    },
    reviewAPI: {
      getAttributeOfReview: jest.fn(),
      createOrModifyOfReview: jest.fn(),
    },
    tagAPI: {
      getAttributeOfTag: jest.fn(),
      getTagIdsOfEvent: jest.fn(),
    },
    userAPI: {
      getAttributeOfUser: jest.fn(),
      getAgeOfUser: jest.fn(),
    },
  },
};
