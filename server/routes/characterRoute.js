const express = require('express');
const { fetchCharacters } = require('../controllers/character.Controller');

const apiBase = '/characters';

const router = express.Router();

router.get(apiBase, fetchCharacters);

module.exports = router;
