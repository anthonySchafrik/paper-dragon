const express = require('express');
const { fetchCharacters } = require('../controllers/character.Controller');
const { createCharacters } = require('../controllers/character.Controller');

const apiBase = '/characters';

const router = express.Router();

router.get(apiBase, fetchCharacters);
router.post(apiBase, createCharacters);

module.exports = router;
