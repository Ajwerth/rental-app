//During the test the env variable is set to test
process.env.NODE_ENV = 'test';

//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let app = require('./app');
let should = chai.should();


chai.use(chaiHttp);
//Our parent block
// describe('Reservations', () => {
//     beforeEach((done) => {
//         Reservation.remove({}, (err) => { 
//            done();           
//         });        
//     });

describe('/GET reservations', () => {
  it('it should GET all the reservations', (done) => {
    chai.request(app)
        .get('/api/reservation')
        .end((err, res) => {
              res.should.have.status(200);
              res.body.should.be.a('array');
              res.body.length.should.be.eql(0);
          done();
        });
  });
});