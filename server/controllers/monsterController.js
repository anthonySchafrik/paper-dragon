const db = require('../../database/mongo');
const log = require('../utils').log;

module.exports.fetchMonster = (req, res) => {
  log(req.query);
  res.send('from fetchMonster');
};
