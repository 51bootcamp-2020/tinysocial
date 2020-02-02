'use strict';

// TODO(SeongJaeSong): If we'll get actual data, these files should be deleted.
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: 'Sihyun',
        lastName: 'Lee',
        googleId: '100086101594136904826',
        birthday: new Date('1999-12-14'),
        profileImgUrl: 'https://lh5.googleusercontent.com/-cQLY-dbwOZg/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rdgpxNUhEwaTUnXPADKsOo1KHazng/s96-c/photo.jpg',
        address: '31 El Camino RealBurlingame, CA 94010',
        phone: '+821084277033',
        email: 'lsh9034@kookmin.ac.kr',
        selfDescription: 'Sihyun is stupid',
        lastInteractionTime: new Date(), // To refresh JWT token
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Yunhyeok',
        lastName: 'Kwak',
        facebookId: 'Yunhyeok facebookId',
        profileImgUrl: 'https://i.ytimg.com/vi/KEgC50mX8ho/maxresdefault.jpg',
        birthday: new Date('1997-9-6'),
        address: '338 South Fremont Street, San Mateo, CA',
        phone: '+1234567890',
        email: 'Yunhyeok facebookId',
        selfDescription: 'Yunhyeok is babo',
        lastInteractionTime: new Date(), // To refresh JWT token
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Seongjae',
        lastName: 'Song',
        profileImgUrl: 'https://m.soonsoobeauty.com/web/upload/NNEditor/20190220/ECB0B8EC9DB4EC8AAC.jpg',
        password: 'qwer1234!',
        email: 'tjdkskgnal61@gmail.com',
        birthday: new Date('1996-4-22'),
        // TODO(yun-kwak): Split the address into street address,
        // additional street address, city, state, zip code
        address: '50 E 3rd Ave, San Mateo, CA 94401',
        phone: '+1029384756',
        selfDescription: 'Seongjae is big man',
        lastInteractionTime: new Date(), // To refresh JWT token
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
