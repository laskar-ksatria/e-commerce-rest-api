const UserController = require('../controllers/user');
const express = require('express');
const Router = express.Router();

Router.get('/', UserController.readAll);
Router.post('/', UserController.create);
Router.post('/login', UserController.login);

module.exports = Router;
