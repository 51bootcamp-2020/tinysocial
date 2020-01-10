const csv = require('csv-parser');
const fs = require('fs');
const stripBom = require('strip-bom-stream');

const {createStore} = require('./database');

// CSV file data
const users = [];
const events = [];
const schedules = [];
const tags = [];
const userParticipatedEvents = [];

const write_fake_db = async () => {
  const db = createStore(true);
  await db.sequelize.sync({force: true});
  // The order of items MUST be stayed.
  const read_info = [
    {csv: 'User.csv', dat: users, db: db.User},
    {csv: 'Event.csv', dat: events, db: db.Event},
    {csv: 'Schedule.csv', dat: schedules, db: db.Schedule},
    {csv: 'Tag.csv', dat: tags, db: db.Tag},
    {
      csv: 'UserParticipatedEvent.csv',
      dat: userParticipatedEvents,
      db: db.UserParticipatedEvent,
    },
  ];

  for (let j = 0; j < read_info.length; j++) {
    let fd = fs.createReadStream('../fakedb/' + read_info[j].csv).
        pipe(await stripBom()).
        pipe(await csv());

    let end = new Promise(function(resolve, reject) {
      fd.on('data', async (data) => await read_info[j].dat.push(data)).
          on('end', async () => {
            /*
            await read_info[j].db.destroy({
                where: {},
                truncate: true,
                cascade: false,
                restartIdentity: true
            });
            */

            console.log('updating:', read_info[j].csv);

            for (let i = 0; i < read_info[j].dat.length; i++) {
              await read_info[j].db.create(read_info[j].dat[i]);
            }
            console.log(read_info[j].csv, 'finished');

            resolve(0);
          });
    });

    await end;
  }
};

write_fake_db();
