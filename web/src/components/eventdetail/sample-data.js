// This is a temporary file for tests.
// TODO(YoonYeoHwan): Remove this file after queries are implemented & used.

// Sample schedule list for test.
const SAMPLE_SCHEDULES = [
  {
    id: 1,
    startTime:'January 15th 09:00',
    endTime:'Januray 15th 12:00',
    address: '31 El Camino',
  },
  {
    id: 2,
    startTime:'January 15th 13:00',
    endTime:'Januray 15th 15:00',
    address: '31 El Camino',
  },
  {
    id: 3,
    startTime:'January 15th 16:00',
    endTime:'Januray 15th 18:00',
    address: '31 El Camino',
  },
]

module.exports = {
  // Sample events list for test.
  SAMPLE_EVENTS : [
    {
      id:1,
      eventTitle: 'Summary of Human History',
      bookTitle: 'Sapiens',
      bookAuthor: 'Yuval Harari',
      bookImage: 'sapiens.png',
      schedules: SAMPLE_SCHEDULES,
      review: {
        title: 'Sapiens is best',
        content: 'actually its not'
      }
    },
    {
      id:2,
      eventTitle: 'Nothing of Human History',
      bookTitle: 'Sapiens',
      bookAuthor: 'Yuval Harari',
      bookImage: 'sapiens.png',
      schedules: SAMPLE_SCHEDULES,
      review: undefined
    }
  ]
}