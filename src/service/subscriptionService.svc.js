const logger = require('../../config/winston');
const subscriptionServiceDao = require('../dao/subscriptionServiceDao');

const getMainSubscriptionService = async () => {
    return await subscriptionServiceDao.getMainSubscriptionService();
};

const getSubscriptionServiceList = async (ssDto, pageDto) => {
    const subscriptionServices = await subscriptionServiceDao.getSubscriptionServiceList(
        ssDto.categoryId,
        ssDto.query,
        ssDto.hashtags
    );

    var result = {
        subscriptionServices,
    };

    result.hashtags = await subscriptionServiceDao.getHashTagByCategoryId(ssDto.categoryId);
    result.categories = await subscriptionServiceDao.getCategoryList();

    return result;
};

const getSubscriptionServiceDetail = async (ssDto) => {
    const subService = await subscriptionServiceDao.getSubscriptionServiceById(ssDto.id);

    // 월 구독료 평균
    var subServiceFee = await subscriptionServiceDao.getAvgMonthFee(subService.categoryId);

    // 멤버십 리스크 조회
    var memberships = await subscriptionServiceDao.getMembershipBySubscriptionServiceId(ssDto.id);

    // 카테고리의 비교항목 배열 탬플릿에 맞게 데이터 맞춤
    var template = subService.category.template.split(' ');
    for (var mindex in memberships) {
        var index = 0;
        var comparisonValues = [];
        tmplt: for (var cnt of template) {
            var comparisonValueArr = [];
            for (var i = 0; i < Number(cnt); i++) {
                // 템플릿 형태로 데이터 만드는 로직
                if (!memberships[mindex].comparisonValues[index]) {
                    comparisonValues.push(comparisonValueArr);
                    break tmplt;
                }

                // 바차트(월구독료) 평균 구독료 추가
                if (
                    memberships[mindex].comparisonValues[index].comparisonItem.code === 'MONTH_FEE'
                ) {
                    let value = memberships[mindex].comparisonValues[index].value;
                    let multiValue = {};
                    let labels = [];
                    let data = [];

                    labels.push(subService.nameKr); // 구독서비스 이름 라벨추가
                    labels.push(subService.category.nameKr + ' 평균'); // 구독서비스 카테고리평균 라벨추가
                    data.push(value); // 구독서비스 구독료 추가
                    data.push(subServiceFee); // 구독서비스 구독료평균 추가
                    multiValue.labels = labels;
                    multiValue.data = data;

                    memberships[mindex].comparisonValues[index].value = multiValue;
                }
                // 바차트(월구독료) 평균 구독료 추가
                else if (
                    memberships[mindex].comparisonValues[index].comparisonItem.code ===
                    'CONTENTS_COUNT'
                ) {
                    let value = memberships[mindex].comparisonValues[index].value;
                    memberships[mindex].comparisonValues[index].value = JSON.parse(value);
                }
                comparisonValueArr.push(memberships[mindex].comparisonValues[index]);
                index++;
            }

            comparisonValues.push(comparisonValueArr);
        }

        memberships[mindex].comparisonValues = comparisonValues;
    }

    subService.dataValues.memberships = memberships;

    return subService;
};

const getSubscriptionServiceSearch = async (ssDto) => {
    // subscriptionService 검색조건
    return await subscriptionServiceDao.getSubscriptionServiceSearch(ssDto.query);
};

const getSubscriptionServiceCompare = async (ssDto) => {
    return await subscriptionServiceDao.getSubscriptionServiceCompare();
};

module.exports = {
    getMainSubscriptionService,
    getSubscriptionServiceList,
    getSubscriptionServiceDetail,
    getSubscriptionServiceSearch,
    getSubscriptionServiceCompare,
};
