const request = require('supertest');
const should = require('should');
const app = require('../app.js');

describe('GET /subscriptionService는', () => {
    describe('성공시', () => {
        it('구독서비스 객체를 담은 배열로 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService?page=1&limit=10')
                .end((err, res) => {
                    done();
                });
        });
    });
});
