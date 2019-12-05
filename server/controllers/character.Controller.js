const { db } = require('../../database/pg');
const log = require('../utils').log;

module.exports.fetchCharacters = async (req, res) => {
  const { userid } = req.query;

  let sql = `SELECT name, level, hp, exp FROM Characters WHERE (userid = '${userid}');`;

  let characters;

  try {
    characters = await db.query(sql);

    const { rows } = characters;

    res.send(rows);
  } catch (error) {
    log(error.message);

    res.send(error.statusCode);
  }
};
