const db = require('../../database/pg');

module.exports.logUserIn = (req, res) => {
  console.log(req.query);
  res.send('from login route');
};
