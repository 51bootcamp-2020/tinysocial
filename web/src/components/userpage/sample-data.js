// This is a temporary file for tests.
// TODO(mskwon1): Remove this file after queries are implemented & used.

// Sample schedule list for test.
const SAMPLE_SCHEDULES = [
  {
    id: 1,
    startDateTime: new Date(),
    endDateTime: new Date(),
    address: '31 El Camino',
  },
  {
    id: 2,
    startDateTime: new Date(),
    endDateTime: new Date(),
    address: '31 El Camino',
  },
  {
    id: 3,
    startDateTime: new Date(),
    endDateTime: new Date(),
    address: '31 El Camino',
  },
];

module.exports = {
  // Sample events list for test.
  SAMPLE_EVENTS: [
    {
      id: 1,
      title: 'Summary of Human History',
      bookTitle: 'Sapiens',
      bookAuthor: 'Yuval Harari',
      bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/' +
        '41%2BlolL22gL._SX314_BO1,204,203,200_.jpg',
      schedule: SAMPLE_SCHEDULES,
      reviews: [{
        title: 'Sapiens is best',
        content: 'actually its not',
        isPublic: true,
      }],
    },
    {
      id: 2,
      title: 'Nothing of Human History',
      bookTitle: 'Sapiens',
      bookAuthor: 'Yuval Harari',
      bookImageUrl: 'https://images-na.ssl-images-amazon.com/images/I/' +
        '41%2BlolL22gL._SX314_BO1,204,203,200_.jpg',
      schedule: SAMPLE_SCHEDULES,
      reviews: [],
    },
  ],
};
