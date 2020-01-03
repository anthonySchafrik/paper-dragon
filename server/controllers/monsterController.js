const Monster = require('../../database/mongo').Monster;
const log = require('../utils').log;

module.exports.fetchMonster = async (req, res) => {
  Monster.find((err, Monster) => {
    if (err) return console.error(err);

    res.send(Monster[0]);
  });
};
