const { db } = require('../../database/pg');
const log = console.log;

module.exports.logUserIn = async (req, res) => {
  const { username, password } = req.query;

  let sql = `SELECT id, username, firstname, password  FROM Accounts WHERE ( username = '${username}');`;

  let user;

  try {
    user = await db.query(sql);

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

module.exports.createUser = async (req, res) => {
  const { userName, firstName, password } = req.body;

  let sql = `INSERT INTO Accounts (username, firstname, password) VALUES('${userName}', '${firstName}', '${password}');`;

  try {
    await db.query(sql);

    res.send('User created');
  } catch (error) {
    if (error) {
      log(`ERROR creating user => ${error}`);

      if (error.code === '23505') {
        res.send('User name all ready Taken');
      } else {
        res.send(`Something went wrong error code ${error.code}`);
      }
    }
  }
};
