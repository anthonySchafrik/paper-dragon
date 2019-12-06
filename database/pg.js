const pg = require('pg');
const log = require('../server/utils').log;

const conString = 'postgres://postgres:password@localhost:5432/PaperDragon';

const client = new pg.Client(conString);

client.connect(err => {
  if (err) {
    log(`An error has happend conecting to pg database; -->: ${err}`);
  } else {
    log(`Connected to pg.`);
  }
});

let sqlUserAccount =
  'CREATE TABLE Accounts (id SERIAL primary key, username VARCHAR(15) UNIQUE, firstname VARCHAR(15),  password VARCHAR(15))';

// client.query(sqlUserAccount, err => {
//   if (err) {
//     if (err.code === '42P07') {
//       log('Accounts Table all ready there');
//     } else {
//       log(`Error in database => ${err}`);
//       throw err;
//     }
//   } else {
//     log('Accounts Table created');
//   }
// });

let sqlCharacters =
  'CREATE TABLE Characters ( id SERIAL primary key, userid INT references Accounts(id), name VARCHAR(15) UNIQUE, level INT, hp INT, exp INT, type VARCHAR(10))';

// client.query(sqlCharacters, err => {
//   if (err) {
//     if (err.code === '42P07') {
//       log('Characters Table all ready there');
//     } else {
//       log(`Error in database => ${err}`);
//       throw err;
//     }
//   } else {
//     log('Characters Table created');
//   }
// });

module.exports.db = client;
