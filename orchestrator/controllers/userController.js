const axios = require('axios')
const baseUrl = 'http://localhost:3001'

class UserController {

    static readAll (req,res,next) {
        axios({
            url: `${baseUrl}/users`,
            method: 'GET'
        })
        .then(({data})=> {
            console.log(data)
            res.status(200).json(data)
        })
        .catch(next)
        
    }

    static create (req,res,next) {
        let { username, password, email } = req.body
        
        axios({
            url: `${baseUrl}/users`,
            method: 'POST',
            data: {
                username,
                password,
                email
            }
        })
        .then(({data})=>{
            
            res.status(201).json(data)
        })
        .catch(next)
    }

    static login (req,res,next) {
        let { username, password } = req.body
        axios({
            url: `${baseUrl}/users/login`,
            method: 'POST',
            data: {
                username,
                password
            }
        })
        .then(({data})=>{
            res.status(202).json(data)
        })
        .catch(next)
    }


}

module.exports = UserController