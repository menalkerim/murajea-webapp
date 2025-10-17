const express = require('express');
const router = express.Router();

const usersRoutes = require('./users.routes');

// Use the users route
router.use('/users', usersRoutes);

module.exports = router;
