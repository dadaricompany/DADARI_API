const request = require('supertest');
const should = require('should');
const app = require('../app.js');
const models = require('../src/models');

describe('GET /subscriptionService는', () => {
    const subscriptionServices = [
        {
            id: 1,
            nameEng: 'netflex',
            nameKr: '넷플렉스',
            logoPath: '/netflex.jpg',
            description: '1등서비스',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
        {
            id: 2,
            nameEng: 'youtube',
            nameKr: '유튜브',
            logoPath: '/youtube.jpg',
            description: '유튜브',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
        {
            id: 3,
            nameEng: 'disney plus',
            nameKr: '디즈니플러스',
            logoPath: '/disney_plus.jpg',
            description: '마블',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
    ];

    const category = [
        {
            id: 1,
            name: '영화/드라마',
            description: '영화/드라마',
        },
    ];

    const comparisonItems = [
        {
            id: 1,
            name: '가격',
            unit: '원',
            type: 'NUMBER',
            categoryId: 1,
        },
    ];

    const comparisonValues = [
        {
            id: 1,
            name: '가격',
            unit: '원',
            type: 'NUMBER',
            categoryId: 1,
            subscriptionServiceId: 1,
        },
    ];

    before(() => models.sequelize.sync({ force: false }));
    before(() => {
        models.Category.bulkCreate(category);
        models.SubscriptionService.bulkCreate(subscriptionServices);
        models.ComparisonItem.bulkCreate(comparisonItems);
        models.ComparisonValue.bulkCreate(comparisonValues);
    })

    describe('성공시', () => {
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
    describe('실패시', () => {
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
