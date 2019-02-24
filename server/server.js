const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const characterRoute = require('./routes/characterRoute');
const monsterRoute = require('./routes/monsterRoute');
const userRoute = require('./routes/userRoute');

const app = express();
let port = 2020;

const log = console.log;
const apiBase = '/api/v1';

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.use(apiBase, characterRoute);
app.use(apiBase, userRoute);
app.use(apiBase, monsterRoute);

app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
