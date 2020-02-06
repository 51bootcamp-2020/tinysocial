module.exports.mockContext = {
  userId: 1,
  dataSources: {
    authAPI: {
      signInWithGoogle: jest.fn(),
      signUpWithGoogle: jest.fn(),
      signIn: jest.fn(),
      signUp: jest.fn(),
      emailValidate: jest.fn(),
    },
    eventAPI: {
      getUpcomingEventIdsOfEvent: jest.fn(),
      getPastEventIdsOfEvent: jest.fn(),
      getIdsOfEvent: jest.fn(),
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
      getIdsOfReview: jest.fn(),
    },
    tagAPI: {
      getAttributeOfTag: jest.fn(),
      getEventIdsOfTag: jest.fn(),
      getIdsOfTag: jest.fn(),
      getTagIdsOfEvent: jest.fn(),
    },
    userAPI: {
      getAttributeOfUser: jest.fn(),
      getAgeOfUser: jest.fn(),
    },
  },
};
