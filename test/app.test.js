const superTest = require('supertest');
const app = require ('../app');

describe('app', () => {
    it('should server html on index', (done) =>{
        superTest(app).get('/').expect('Content-Type', /html/).expect(200, done)
    })
})