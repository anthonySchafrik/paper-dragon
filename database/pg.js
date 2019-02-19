const pg = require('pg');

const conString = 'postgres://postgres:password@localhost:5432/PaperDragon';

const client = new pg.Client(conString);

client.connect(err => {
  if (err) {
    console.log(`An error has happend conecting to pg database; -->: ${err}`);
  } else {
    console.log(`Connected to pg.`);
  }
});

let sqlUserAccount =
  'CREATE TABLE Accounts (id SERIAL primary key, username VARCHAR(15) UNIQUE, firstname VARCHAR(255),  password VARCHAR(15))';

client.query(sqlUserAccount, err => {
  if (err) {
    if (err.code === '42P07') {
      console.log('Accounts Table all ready there');
    } else {
      console.log(`Error in database => ${err}`);
      throw err;
    }
  } else {
    console.log('Accounts Table created');
  }
});

let sqlCharacters =
  'CREATE TABLE Characters ( id SERIAL primary key, userid INT references Accounts(id), name VARCHAR(15) UNIQUE, level INT, hp INT, exp INT)';

client.query(sqlCharacters, err => {
  if (err) {
    if (err.code === '42P07') {
      console.log('Characters Table all ready there');
    } else {
      console.log(`Error in database => ${err}`);
      throw err;
    }
  } else {
    console.log('Characters Table created');
  }
});

module.exports.db = client;
