const csv = require('csv-parser');
const fs = require('fs');
const stripBom = require('strip-bom-stream');

const { createStore } = require('./database');

const FAKEDB_PATH = '../fakedb/';

// CSV file data
const users = [];
const events = [];
const schedules = [];
const tags = [];
const eventParticipants = [];

const write_fake_db = async () => {
  const db = createStore(true);
  await db.sequelize.sync({ force: true });
  // The order of items MUST be stayed.
  const read_info = [
    { csv: 'User.csv', dat: users, db: db.User },
    { csv: 'Event.csv', dat: events, db: db.Event },
    { csv: 'Schedule.csv', dat: schedules, db: db.Schedule },
    { csv: 'Tag.csv', dat: tags, db: db.Tag },
    {
      csv: 'EventParticipant.csv',
      dat: eventParticipants,
      db: db.EventParticipant,
    },
  ];

  for (let i = 0; i < read_info.length; i++) {
    let fd = fs.createReadStream(FAKEDB_PATH + read_info[i].csv).
      pipe(await stripBom()).
      pipe(await csv());

    let end = new Promise(function (resolve, reject) {
      fd.on('data', async (data) => await read_info[i].dat.push(data)).
        on('end', async () => {
          console.log('updating:', read_info[i].csv);

          for (let j = 0; j < read_info[i].dat.length; j++) {
            await read_info[i].db.create(read_info[i].dat[j]);
          }
          console.log(read_info[i].csv, 'finished');

          resolve(0);
        });
    });

    await end;
  }
};

write_fake_db();
