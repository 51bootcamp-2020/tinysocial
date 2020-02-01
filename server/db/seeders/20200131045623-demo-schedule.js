'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Schedules', [
      {
        startDateTime: new Date('2020-1-20 12:00'),
        endDateTime: new Date('2020-1-20 13:15'),
        address: '120 S Ellsworth Ave San Mateo, CA 94401',
        latitude: 37.566269,
        longitude: -122.324986,
        eventId: 1,
      },
      {
        startDateTime: new Date('2020-2-5 13:30'),
        endDateTime: new Date('2020-2-5 14:45'),
        address: '120 S Ellsworth Ave San Mateo, CA 94401',
        latitude: 37.566269,
        longitude: -122.324986,
        eventId: 1,
      },
      {
        startDateTime: new Date('2020-2-5 15:00'),
        endDateTime: new Date('2020-2-10 16:15'),
        address: '1 Baldwin Ave San Mateo, CA 94401',
        latitude: 37.565898,
        longitude: -122.327813,
        eventId: 1,
      },
      {
        startDateTime: new Date('2020-1-5 12:00'),
        endDateTime: new Date('2020-1-5 13:15'),
        address: 'Carlstrom Productions, Inc., 204 2nd Ave Suite 129, San Mateo, CA 94401',
        latitude: 37.565773,
        longitude: -122.323952,
        eventId: 2,
      },
      {
        startDateTime: new Date('2020-1-13 12:00'),
        endDateTime: new Date('2020-1-13 13:15'),
        address: 'Carlstrom Productions, Inc., 204 2nd Ave Suite 129, San Mateo, CA 94401',
        latitude: 37.565773,
        longitude: -122.323952,
        eventId: 2,
      },
      {
        startDateTime: new Date('2020-4-22 00:00'),
        endDateTime: new Date('2020-4-22 23:15'),
        address: 'Kokko, 509 2nd Ave, San Mateo, CA 94401',
        latitude: 37.567726,
        longitude: -122.321456,
        eventId: 3,
      },
      {
        startDateTime: new Date('2020-2-25 10:00'),
        endDateTime: new Date('2020-2-25 14:15'),
        address: 'San Mateo Public Library, 55 W 3rd Ave, San Mateo, CA 94402Kokko, 509 2nd Ave, San Mateo, CA 94401',
        latitude: 37.562245,
        longitude: -122.326853,
        eventId: 4,
      },
      {
        startDateTime: new Date('2020-1-1 00:00'),
        endDateTime: new Date('2020-1-1 24:00'),
        address: 'San Mateo Central Park, 50 E 5th Ave, San Mateo, CA 94401',
        latitude: 37.561321,
        longitude: -122.323487,
        eventId: 5,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Schedules', null, {});
  },
};
