const express = require('express');

//middlewares

//controller
const {
  getAllUsers,
  getIdHistory,
  login,
  userSingUp,
} = require('../controllers/user.controller');

const router = express.Router();

//routes
router.route('/').get(getAllUsers);
router.route('/singup').post(userSingUp);
router.route('/login').post(login);

router.get('/:id/history', getIdHistory);

module.exports = { userRouter: router };
