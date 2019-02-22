const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let conString = 'mongodb://localhost/PaperDragon';

let db = mongoose.connection;
mongoose.connect(conString, { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'mongoDB connection error'));
db.once('open', () => console.log('mongoDB successfully connected'));
const log = console.log;

let monsterSchema = new Schema({
  type: String,
  element: String,
  moves: Array
});

let Monster = mongoose.model('Monster', monsterSchema);

// let fireDragon = new Monster({
//   type: 'Dragon',
//   element: 'Fire',
//   moves: ['Fireball']
// });

// fireDragon.save((err, fireDragon) => {
//   if (err) {
//     console.log(err);
//   }
// });