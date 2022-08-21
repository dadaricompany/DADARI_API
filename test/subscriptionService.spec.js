const request = require('supertest');
const should = require('should');
const app = require('../app.js');
//const models = require('../src/models');
const logger = require('../config/winston.js');

describe('GET /subscriptionService는', () => {
    const subscriptionServices = [
        {
            id: 1,
            nameEng: 'netflex',
            nameKr: '넷플렉스',
            logoPath: '/logo/subscriptionService/netflex.jpg',
            description: '1등서비스',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
        {
            id: 2,
            nameEng: 'youtube',
            nameKr: '유튜브',
            logoPath: '/logo/subscriptionService/youtube.jpg',
            description: '유튜브',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
        {
            id: 3,
            nameEng: 'disney plus',
            nameKr: '디즈니플러스',
            logoPath: '/logo/subscriptionService/disney_plus.jpg',
            description: '마블',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
    ];

    const category = [
        {
            id: 1,
            nameKr: '영화/드라마',
            nameEng: 'movie',
            description: '영화/드라마',
            logoPath: '/logo/category/movie.jpg',
            sort: 1,
        },
        {
            id: 2,
            nameKr: '음악',
            nameEng: 'music',
            description: '음악',
            logoPath: '/logo/category/music.jpg',
            sort: 2,
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
        {
            id: 2,
            name: '제공서비스',
            unit: '',
            type: 'TEXT',
            categoryId: 1,
        },
    ];

    const comparisonValues = [
        {
            id: 1,
            value: '9500',
            comparisonItemId: 1,
            subscriptionServiceId: 1,
        },
        {
            id: 2,
            value: '영화, 드라마',
            comparisonItemId: 2,
            subscriptionServiceId: 1,
        },
    ];

    before(async () => {
        await app.models.sequelize
            .sync({ force: false })
            .then(() => {
                app.models.Category.bulkCreate(category);
                app.models.SubscriptionService.bulkCreate(subscriptionServices);
                app.models.ComparisonItem.bulkCreate(comparisonItems);
                app.models.ComparisonValue.bulkCreate(comparisonValues);
            })
            .catch((err) => {
                console.error('>>>>', err);
            });
        //const transaction = await app.models.sequelize.transaction();

        //await transaction.commit();
    });

    describe('메인목록 조회시', () => {
        it('구독서비스 객체를 담은 배열로 응답한다 ', (done) => {
            request(app)
                //?page=0&limit=two
                .get('/subscriptionService/main')
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
