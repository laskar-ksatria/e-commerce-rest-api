const express = require('express')
const Router = express.Router()
const userController = require('../controllers/userController')

function auth(req,res,next) {
    console.log('Hallo disini auth')
    next()
}


Router.get('/users', auth,userController.readAll)
Router.post('/users',userController.create)
Router.post('/users/login', userController.login)

module.exports = Router