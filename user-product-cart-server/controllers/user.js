const User = require('../models/user')
const { generateToken } = require('../helpers/jwt')
const { checkPass } = require('../helpers/hashPassword')

class UserController {

    static readAll (req,res,next) {
   
        User.find({})
            .then(function (users) {
                res.status(200).json(users)
            })
            .catch(next)
    }

    static create (req,res,next) {
        let { username, email, password } = req.body
        User.create({
            username,
            email,
            password
        })
        .then(function (user) {
            res.status(201).json({message: `Thank You ${username} for registering, now you can login to your account`})
        })
        .catch(next)
    }

    static login (req,res,next) {
        let { username, password } = req.body
        User.findOne({username})
            .then(function (user) {
                if (user && checkPass(password, user.password)){
                    let payload = {id: user.id}
                    let token = generateToken(payload)
                    res.status(202).json({token, message:`Welcome ${user.username}, We hope you enjoy our app`})

                }else{
                    next({message: 'Invalid Username / Password'})
                }
            })
            .catch(next)
    }

};

module.exports = UserController