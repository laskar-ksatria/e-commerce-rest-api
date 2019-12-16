//require the dev-dependencies
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../app')
const should = chai.should();

chai.use(chaiHttp)

describe('/GET All User', ()=> {
    it('Should GET the users data', (done) => {
        chai.request(server)
            .get('/users')
            .end( (err,res) => {
                console.log('hallo disini chai')
                res.should.have.status(200)
                res.should.be.a('array')
                done()
            })
    })
})
