const {DataSource} = require('apollo-datasource');

const createStore = () => {
  // Fake DB
  // mockup data
  // todo: move this into separated CSV file
  //  and import it into DB

  const users = [
    {
      id: 0,
      firstName: 'Yun',
      lastName: 'Kwak',
      email: 'rev1c0sm0s@gmail.com',
      age: 20,
    },
  ];

  const tags = [
    {
      id: 0,
      name: 'Tech',
    },
    {
      id: 1,
      name: 'Party',
    },
  ];

  const events = [
    {
      id: 0,
      host: users[0],
      title: 'Sheldon\'s birthday party',
      description: 'Happy birthday, Sheldon',
      price: 1.2,
      maxParticipants: 13,
      tags: [tags[0], tags[1]],
    },
  ];

  return {users, tags, events};
};

// todo: remove this. make the real API to access DB
class fakeAPI extends DataSource {
  constructor({store}) {
    super();
    this.store = store;
  }

  initialize(config) {
    this.context = config.context;
  }

  getAllEvents() {
    return this.store.events;
  }
}

module.exports = {
  createStore,
  fakeAPI,
};
