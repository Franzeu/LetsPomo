const express = require('express');
const router = express.Router();

// Import controllers
const {getTest} = require('../controllers/test');

// Import Middlewares

// API routes
router.get('/test', getTest);

module.exports = router;
