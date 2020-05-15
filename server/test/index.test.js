// Set env variable to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();


chai.use(chaiHttp);

//Our parent block
describe('Testing index.js routes', () => {

    /*
     * Test the /GET route
     */
    describe('/GET users', () => {
        it('it should GET all the users', (done) => {
            chai.request(server)
                .get('/users')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(3);
                    done();
                });
        });
    });

    /*
     * Test the /POST route
     */
    describe('/POST user', () => {
        it('it should POST a user ', (done) => {
            let user = {
                username: "@Sahil",
                name: "Sahil"
            }
            chai.request(server)
                .post('/user')
                .send(user)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('action').eql('USER ADDED');
                    done();
                });
        });
    });
    
    /*
     * Test the /DELETE/:username route
     */
    describe('/DELETE/:username user', () => {
        it('it should DELETE a user given the username', (done) => {
            let username = '@Taman';
            chai.request(server)
                .delete('/user/' + username)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('action').eql('USER DELETED');
                    done();
                });
        });
    });
});