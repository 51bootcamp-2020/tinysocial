const {Query} = require('./resolvers/query');
const {Mutation} = require('./resolvers/mutation');
const {User} = require('./resolvers/user');
const {Event} = require('./resolvers/event');

module.exports = {
  Query: {
    events: (_, {pageSize, after}, context) => {
      // Temporal data for test event list page
      const events_list = [
        {
          id: 0,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'Is Sang-geon Good?',
          description: 'Learning Ethics by analysing behavior of Sang-geon Yun',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 1,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'Introduction to Algorithm',
          description: 'Basic to ICPC World Final... You think you can handle this?',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 2,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'What is meaning of life?',
          description: 'Sometimes we thinking about huge size of the universe. Compare to what humanity accomplished so far, the universe seems wast of space... isn\' it?',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 3,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'If AI gets self awareness...',
          description: 'That means bad thing to human? YES. But in a perspective of evolution? NO.',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 4,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'When Space X going to launch a rocket to the Mars?',
          description: 'Let\'s analyse the probability!',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 5,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'title1',
          description: 'description1',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 6,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'title2',
          description: 'description2',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 7,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'title3',
          description: 'description3',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        },
        {
          id: 8,
          host: 0,
          creationTime: '',
          lastUpdatedTime: '',
          schedule: [],
          title: 'title4',
          description: 'description4',
          price: 999999.99,
          maxParticipants: 1000,
          tags: [],
          participants: []
        }
      ];

      let ret = [];
      if(!pageSize) {
        ret = events_list;
      }else{
        for(let j = 0; j < Math.min(pageSize, 9); j++){
          ret.push(events_list[j]);
        }
      }

      return {
        cursor: '뷁',
        hasMore: false,
        events: ret
      };
    }
  },
  Mutation,
  User,
  Event,
  Tag: {
  },
  EventConnection: {
  },
};
