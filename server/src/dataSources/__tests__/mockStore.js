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
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  },
  Schedule: {
    findOne: jest.fn(),
  },
  Tag: {},
};
