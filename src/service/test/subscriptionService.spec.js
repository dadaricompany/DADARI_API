const svc = require('../subscriptionService.svc');
const logger = require('../../../config/winston').logger;
const PaginationUtil = require('../../utils/PaginationUtil');

describe('subscriptionService의', () => {
    describe('메인목록 조회시', () => {
        it('구독서비스 객체를 담은 배열로 응답한다 ', (done) => {
            var subService = svc.getMainSubscriptionService(
                {},
                {
                    offset: 0,
                    limit: 10,
                }
            );
            logger.info(JSON.stringify(process.env.NODE_ENV));
            logger.info(JSON.stringify(subService));
            done();
        });
    });
});
