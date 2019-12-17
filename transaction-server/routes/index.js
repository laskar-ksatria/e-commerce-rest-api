const validate = require('../middleware/validate')
const express = require('express')
const Router = express.Router()
const transactionController = require('../controllers/transactionController')

Router.get('/transactions', validate.stockCheck, validate.checkBalanced, transactionController.create)

module.exports = Router