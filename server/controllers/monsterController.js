const db = require('../../database/mongo');

module.exports.fetchMonster = (req, res) => {
  console.log(req.query);
  res.send('from fetchMonster');
};
