const express = require('express');
const { fetchMonster } = require('../controllers/monsterController');

const apiBase = '/monster';

const router = express.Router();

router.get(apiBase, fetchMonster);

module.exports = router;
