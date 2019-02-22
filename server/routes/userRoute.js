const express = require('express');
const { logUserIn, createUser } = require('../controllers/userController.js');

const apiBase = '/user';

const router = express.Router();

router.get(`${apiBase}/login`, logUserIn);

router.post(apiBase, createUser);

module.exports = router;
