const mongoose = require('mongoose');

let conString = 'mongodb://localhost/PaperDragon';

let db = mongoose.connection;
mongoose.connect(conString, { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'mongoDB connection error'));
db.once('open', () => console.log('mongoDB successfully connected'));
