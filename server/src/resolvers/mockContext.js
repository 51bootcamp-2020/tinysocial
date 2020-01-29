module.exports.mockContext = {
  dataSources: {
    authAPI: { },
    eventAPI: {
      getAttributeOfSchedule: jest.fn(),
    },
    reviewAPI: {
      getAttributeOfReview: jest.fn(),
      createOrModifyOfReview: jest.fn(),
    },
    tagAPI: { 
      getAttributeOfTag: jest.fn(),
      getEventIdsOfTag: jest.fn(),
     },
    userAPI: { },
  }
};
