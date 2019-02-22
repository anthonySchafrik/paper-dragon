const { db } = require('../../database/pg');
const log = console.log;

module.exports.logUserIn = (req, res) => {
  console.log(req.query);
  res.send('from login route');
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
