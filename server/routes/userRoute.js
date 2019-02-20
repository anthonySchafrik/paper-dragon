const express = require('express');
const { logUserIn } = require('../controllers/userController.js');

const apiBase = '/user';

const router = express.Router();

router.get(`${apiBase}/login`, logUserIn);

module.exports = router;
