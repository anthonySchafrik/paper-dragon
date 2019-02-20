const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');

const userRoute = require('./routes/userRoute');
const monsterRoute = require('./routes/monsterRoute');

const app = express();
let port = 2020;

const log = console.log;
const apiBase = '/api/v1';

app.use(apiBase, userRoute);

app.use(apiBase, monsterRoute);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
