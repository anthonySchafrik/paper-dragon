const express = require('express');
const {
  fetchCharacters,
  createCharacters
} = require('../controllers/characterController');

const apiBase = '/characters';

const router = express.Router();

router.get(apiBase, fetchCharacters);
router.post(apiBase, createCharacters);

module.exports = router;
