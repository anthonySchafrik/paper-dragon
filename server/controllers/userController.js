const { db } = require('../../database/pg');
const log = console.log;

module.exports.logUserIn = (req, res) => {
  const { username, password } = req.query;

  let sql = `SELECT *  FROM Accounts WHERE ( username = '${username}');`;

  db.query(sql, (err, result) => {
    if (err) {
      res.send(`Something went wrong error code: ${err.code}`);
    }
    if (result.rows.length) {
      if (result.rows[0].password === password) {
        res.send({ passwordCheck: true, userid: result.rows[0].id });
      } else {
        res.send('Password did not match');
      }
    } else {
      res.send('User not found');
    }
  });
};

module.exports.createUser = (req, res) => {
  const { userName, firstName, password } = req.body;

  let sql = `INSERT INTO Accounts (username, firstname, password) VALUES('${userName}', '${firstName}', '${password}');`;

  db.query(sql, (err, result) => {
    if (err) {
      log(`ERROR creating user => ${err}`);
      if (err.code === '23505') {
        res.send('User name all ready Taken');
      } else {
        res.send(`Something went wrong error code ${err.code}`);
      }
    } else {
      log('inserted Group sotred', result);
      res.send('User created');
    }
  });
};
