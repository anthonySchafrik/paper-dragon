const { db } = require('../../database/pg');
const log = console.log;

module.exports.logUserIn = async (req, res) => {
  const { username, password } = req.query;

  let sql = `SELECT id, username, firstname, password  FROM Accounts WHERE ( username = '${username}');`;

  let user;

  try {
    user = await db.query(sql);
    console.log(user);
    const { rows } = user;

    if (rows.length) {
      const { password: userPw, id } = rows[0];

      if (userPw === password) {
        res.send({ passwordCheck: true, userid: id });
      } else {
        res.send('Password did not match');
      }
    }
  } catch (error) {
    console.log(error.message);

    res.send(error.statusCode);
  }
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
      log(`Created user ${userName}`);
      res.send('User created');
    }
  });
};
