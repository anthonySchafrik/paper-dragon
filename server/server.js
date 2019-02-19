const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const mongoDB = require('../database/mongo');
const pg = require('../database/pg');

const app = express();
const log = console.log;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));

let port = 2020;
app.listen(port, () => {
  log(`server is listing on port ${port}`);
});
