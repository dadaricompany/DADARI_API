const request = require('supertest');
const should = require('should');
const app = require('../app.js');
//const models = require('../src/models');
const logger = require('../config/winston.js');
const subscriptionServices = require('./data/subscriptionService');
const memberships = require('./data/membership');
const hashtags = require('./data/hashtag');
const subscriptionServiceHashtags = require('./data/subscriptionServiceHashtag');
const categories = require('./data/category');
const comparisonItems = require('./data/comparisonItem');

//const comparisonValues = require('./data/comparisonValue');
const comparisonValuesMovie = require('./data/comparisonValueMovie');
const comparisonValuesMusic = require('./data/comparisonValueMusic');
const comparisonValuesBook = require('./data/comparisonValueBook');
const comparisonValuesCloth = require('./data/comparisonValueCloth');
const comparisonValuesEcommerce = require('./data/comparisonValueEcommerce');
const comparisonValuesFood = require('./data/comparisonValueFood');
const comparisonValuesDrink = require('./data/comparisonValueDrink');
const comparisonValuesMore = require('./data/comparisonValueMore');

describe('GET /subscriptionService는', () => {
    before(async () => {
        await app.models.sequelize
            .sync({ force: true })
            .then(async () => {
                await app.models.Category.bulkCreate(categories);
                await app.models.Hashtag.bulkCreate(hashtags);
                await app.models.SubscriptionService.bulkCreate(subscriptionServices);

                await app.models.SubscriptionServiceHashtag.bulkCreate(subscriptionServiceHashtags);
                await app.models.Membership.bulkCreate(memberships);
                await app.models.ComparisonItem.bulkCreate(comparisonItems);

                //await app.models.ComparisonValue.bulkCreate(comparisonValues);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesMovie);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesMusic);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesBook);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesCloth);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesEcommerce);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesFood);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesDrink);
                await app.models.ComparisonValue.bulkCreate(comparisonValuesMore);
            })
            .catch((err) => {
                console.error('>>>>', err);
            });
        //const transaction = await app.models.sequelize.transaction();

        //await transaction.commit();
    });

    describe('메인목록 조회시', () => {
        it('구독서비스 객체를 담은 main 객체로 응답한다 ', (done) => {
            request(app)
                //?page=0&limit=two
                .get('/subscriptionService/main')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe('구독서비스 목록 조회시', () => {
        it('구독서비스와 카테고리를 담은 객체로 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService/list?categoryId=1')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe('구독서비스 목록 조회시', () => {
        it('페이지가 없으면 0페이지로 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService/list?categoryId=1')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe('구독서비스 목록 조회시', () => {
        it('hashtags로 검색된다. ', (done) => {
            request(app)
                .get('/subscriptionService/list?categoryId=1&hashtags=1,2')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe('구독서비스 목록 조회시', () => {
        it('query로 검색된다. ', (done) => {
            request(app)
                .get('/subscriptionService/list?categoryId=1&query=t')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe('구독서비스 상세 조회시', () => {
        it('구독서비스 정보를 담은 객체응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService/2003')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe('구독서비스 검색 조회시', () => {
        it('구독서비스 검색 결과를 담은 배열를 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService/search?query=e')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });
    });

    describe('구독서비스 비교 조회시', () => {
        it('구독서비스 정보를 담은 객체응답한다 ', (done) => {
            request(app)
                .get(
                    '/subscriptionService/compare?categoryId=1&subscriptionServiceId01=1&subscriptionServiceId02=2'
                )
                .end((err, res) => {
                    res.body.should.be.instanceOf(Object);
                    done();
                });
        });
    });

    describe.skip('성공시', () => {
        it('구독서비스 객체를 담은 배열로 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService')
                .end((err, res) => {
                    res.body.should.be.instanceOf(Array);
                    done();
                });
        });

        it('테스트케이스 갯수만큼 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService')
                .end((err, res) => {
                    res.body.should.have.lengthOf(subscriptionServices.length);
                    done();
                });
        });

        it('Pagenation 갯수만큼 응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService?limit=2&page=1')
                .end((err, res) => {
                    res.body.should.have.lengthOf(2);
                    done();
                });
        });
    });
    describe.skip('실패시', () => {
        it('limit이 숫자형이 아니면 400을 응답한다', (done) => {
            request(app)
                .get('/subscriptionService?limit=two')
                .expect(400)
                .end((err, res) => {
                    done();
                });
        });
    });
});
