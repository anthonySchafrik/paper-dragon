const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const log = require('../server/utils').log;

const conString = process.env.MONGO_CONNECT_STRING;

mongoose.connect(conString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'mongoDB connection error'));
db.once('open', () => log('mongoDB successfully connected'));

const monsterSchema = new mongoose.Schema({
  type: String,
  element: String,
  moves: Array
});

const Monster = mongoose.model('Monster', monsterSchema);

const fireDragon = new Monster({
  type: 'Dragon',
  element: 'Fire',
  moves: [
    ['Fire Ball', { low: 5, high: 10, aoe: true, autoMiss: false }],
    ['Fire Claw', { low: 2, high: 5, aoe: false, autoMiss: false }],
    ['Fly', { low: 5, high: 10, aoe: false, autoMiss: true }],
    ['Growl', { low: 1, high: 3, aoe: false, autoMiss: true }]
  ]
});

const bear = new Monster({
  type: 'Beast',
  element: 'none',
  moves: [
    ['Fire Ball', { low: 5, high: 10, aoe: true, autoMiss: false }],
    ['Fire Claw', { low: 2, high: 5, aoe: false, autoMiss: false }],
    ['Fly', { low: 5, high: 10, aoe: false, autoMiss: true }],
    ['Growl', { low: 5, high: 10, aoe: false, autoMiss: false }]
  ]
});

// fireDragon.save();
// bear.save();

module.exports.Monster = Monster;
