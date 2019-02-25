const { db } = require('../../database/pg');

module.exports.fetchCharacters = (req, res) => {
  const { userid } = req.query;

  let sql = `SELECT * FROM Characters WHERE (userid = '${userid}');`;

  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result.rows);
    }
  });
};
