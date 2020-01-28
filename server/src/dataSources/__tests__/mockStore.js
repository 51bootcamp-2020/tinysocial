module.exports.mockStore = {
  Event: {
    findOne: jest.fn(),
    findAll: jest.fn(),
  },
  User: {},
  EventBookClub: {},
  EventParticipant: {},
  EventTag: {},
  Review: {
    Review: {
      findAll: jest.fn(),
      findOne: jest.fn(),
      findOrCreateOrModify: jest.fn(),
    },
    User: {

    },
    Event: {

    },
  },
  Schedule: {
    findOne: jest.fn(),
  },
  Tag: {},
};
