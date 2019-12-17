const jwt = require('jsonwebtoken')
const secret = process.env.secret

function verifyToken (token) {
    return jwt.verify(token, secret)
}

module.exports = verifyToken