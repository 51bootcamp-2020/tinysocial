module.exports.mockContext = {
  dataSources: {
    authAPI: { },
    eventAPI: { },
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
