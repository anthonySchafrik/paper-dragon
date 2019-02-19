const pg = require('pg');

const conString = 'postgres://postgres:postgres@localhost:5432/PaperDragon';

const client = new pg.Client(conString);

client.connect(err => {
  if (err) {
    console.log(`An error has happend conecting to pg database; -->: ${err}`);
  } else {
    console.log(`Connected to pg.`);
  }
});

module.exports.db = client;
