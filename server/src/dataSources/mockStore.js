module.exports.mockStore = {
  Event: {
    findOne: jest.fn(),
    findAll: jest.fn(),
  },
  User: {
    findOne: jest.fn(),
    findAll: jest.fn(),
  },
  EventBookClub: {
    findOne: jest.fn(),
    findAll: jest.fn(),
  },
  EventParticipant: {
    findOne: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
  },
  EventTag: {
    findAll: jest.fn(),
  },
  Review: {
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    save: jest.fn(),
  },
  Schedule: {
    findOne: jest.fn(),
    findAll: jest.fn(),
  },
  Tag: {
    findOne: jest.fn(),
    findAll: jest.fn(),
  },
};
