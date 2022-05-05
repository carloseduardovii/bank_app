const express = require('express');

//middlewares

//controller
const { transfer } = require('../controllers/transfer.controller');

const router = express.Router();

//routes
router.route('/').post(transfer);

module.exports = { transferRouter: router };
