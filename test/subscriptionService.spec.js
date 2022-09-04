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
            logoPath: '/images/logo/netflex.png',
            description: '1등서비스',
            updateBy: 'admin',
            createBy: 'admin',
            categoryId: 1,
        },
        {
            id: 2,
            nameEng: 'youtube',
            nameKr: '유튜브',
            logoPath: '/images/logo/youtube.png',
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

    const memberships = [
        {
            id: 1,
            name: '베이식',
            grade: 1,
            subscriptionServiceId: 1,
        },
        {
            id: 2,
            name: '스탠다드',
            grade: 2,
            subscriptionServiceId: 1,
        },
        {
            id: 3,
            name: '프리미엄',
            grade: 3,
            subscriptionServiceId: 1,
        },
        {
            id: 4,
            name: '기본',
            grade: 1,
            subscriptionServiceId: 2,
        },
    ];
    const category = [
        {
            id: 1,
            nameKr: '영화/드라마',
            nameEng: 'movie',
            description: '영화/드라마',
            logoPath: '/images/category/list-icon-category-movie.png',
            sort: 1,
            template: '1 2 2 1 1',
        },
        {
            id: 2,
            nameKr: '음악',
            nameEng: 'music',
            description: '음악',
            logoPath: '/images/category/list-icon-category-music.png',
            sort: 2,
            template: '1 1 1 1 1',
        },
    ];

    const comparisonItems = [
        {
            id: 1,
            name: '가격',
            unit: '원',
            type: 'NUMBER',
            sort: 3,
            categoryId: 1,
        },
        {
            id: 2,
            name: '제공서비스',
            unit: '',
            type: 'TEXT',
            sort: 2,
            categoryId: 1,
        },
        {
            id: 3,
            name: '구독기간',
            unit: '',
            type: 'TEXT',
            sort: 3,
            categoryId: 1,
        },
        {
            id: 4,
            name: '무료기간',
            unit: '',
            type: 'TEXT',
            sort: 4,
            categoryId: 1,
        },
        {
            id: 5,
            name: '제휴해택',
            unit: '',
            type: 'TEXT',
            sort: 5,
            categoryId: 1,
        },
        {
            id: 6,
            name: '부가기능',
            unit: '',
            type: 'TEXT',
            sort: 6,
            categoryId: 1,
        },
        {
            id: 7,
            name: '컨텐츠 수',
            unit: '',
            type: 'TEXT',
            sort: 7,
            categoryId: 1,
        },
    ];

    const comparisonValues = [
        {
            id: 1,
            value: '9500',
            comparisonItemId: 1,
            membershipId: 1,
        },
        {
            id: 2,
            value: '영화, 드라마',
            comparisonItemId: 2,
            membershipId: 1,
        },
        {
            id: 3,
            value: '월',
            comparisonItemId: 3,
            membershipId: 1,
        },
        {
            id: 4,
            value: '1개월',
            comparisonItemId: 4,
            membershipId: 1,
        },
        {
            id: 5,
            value: 'KT통신사 제휴',
            comparisonItemId: 5,
            membershipId: 1,
        },
        {
            id: 6,
            value: '넷플릭스 오리지널 제공',
            comparisonItemId: 6,
            membershipId: 1,
        },
        {
            id: 7,
            value: '0',
            comparisonItemId: 7,
            membershipId: 1,
        },
        {
            id: 8,
            value: '12000',
            comparisonItemId: 1,
            membershipId: 2,
        },
        {
            id: 9,
            value: '영화, 드라마',
            comparisonItemId: 2,
            membershipId: 2,
        },
        {
            id: 10,
            value: '월',
            comparisonItemId: 3,
            membershipId: 2,
        },
        {
            id: 11,
            value: '1개월',
            comparisonItemId: 4,
            membershipId: 2,
        },
        {
            id: 12,
            value: 'KT통신사 제휴',
            comparisonItemId: 5,
            membershipId: 2,
        },
        {
            id: 13,
            value: '넷플릭스 오리지널 제공',
            comparisonItemId: 6,
            membershipId: 2,
        },
        {
            id: 14,
            value: '0',
            comparisonItemId: 7,
            membershipId: 2,
        },
        {
            id: 22,
            value: '10450',
            comparisonItemId: 1,
            membershipId: 4,
        },
        {
            id: 23,
            value: '영상, 영상',
            comparisonItemId: 2,
            membershipId: 4,
        },
        {
            id: 24,
            value: '월',
            comparisonItemId: 3,
            membershipId: 4,
        },
        {
            id: 25,
            value: '1개월',
            comparisonItemId: 4,
            membershipId: 4,
        },
        {
            id: 26,
            value: 'SK, LG U+, KT 통신사',
            comparisonItemId: 5,
            membershipId: 4,
        },
        {
            id: 27,
            value: '광고제거, 영상 다운로드, 백그라운드 재생',
            comparisonItemId: 6,
            membershipId: 4,
        },
        {
            id: 28,
            value: '0',
            comparisonItemId: 7,
            membershipId: 4,
        },
    ];

    before(async () => {
        await app.models.sequelize
            .sync({ force: true })
            .then(() => {
                app.models.Category.bulkCreate(category);
                app.models.SubscriptionService.bulkCreate(subscriptionServices);
                app.models.Membership.bulkCreate(memberships);
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

    describe('구독서비스 상세 조회시', () => {
        it('구독서비스 정보를 담은 객체응답한다 ', (done) => {
            request(app)
                .get('/subscriptionService/2')
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
