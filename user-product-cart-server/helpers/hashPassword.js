const bcr = require('bcryptjs')

function hashPass (pass) {
    return bcr.hashSync(pass, bcr.genSaltSync(2))
}

function checkPass (pass, hash) {
    return bcr.compareSync(pass,hash)
}


module.exports = {
    hashPass,
    checkPass
}