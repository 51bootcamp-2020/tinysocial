module.exports.mockStore = {
  Event: {},
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
  Schedule: {},
  Tag: {},
};
