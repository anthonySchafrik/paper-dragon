const { db } = require('../../database/pg');

module.exports.fetchCharacters = (req, res) => {
  const { userid } = req.query;

  // let sql = `SELECT * FROM Characters WHERE (userid = '${userid}');`;
  let sql = `SELECT * FROM Characters WHERE (userid = '1');`;

  db.query(sql, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result.rows);
  });
};
