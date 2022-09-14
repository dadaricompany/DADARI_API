const {
    Category,
    ComparisonItem,
    ComparisonValue,
    SubscriptionService,
    Membership,
    Hashtag,
} = require('../models');
const sequelize = require('sequelize');
const logger = require('../../config/winston');

const getMainSubscriptionService = async (ssDto, pageDto) => {
    const main = await Category.findAll({
        include: [
            {
                model: SubscriptionService,
            },
        ],
    });

    return main;
};

const getSubscriptionServiceList = async (ssDto, pageDto) => {
    // subscriptionService 검색조건
    let ssWhere = {
        categoryId: ssDto.categoryId,
        [sequelize.Op.or]: [
            {
                nameEng: {
                    [sequelize.Op.like]: '%' + ssDto.query + '%',
                },
            },
            {
                nameKr: {
                    [sequelize.Op.like]: '%' + ssDto.query + '%',
                },
            },
            {
                description: {
                    [sequelize.Op.like]: '%' + ssDto.query + '%',
                },
            },
        ],
    };

    // hashtag 검색조건
    let htWhere = {};
    if (ssDto.hashtags) {
        let hashtagList = ssDto.hashtags.split(',');
        let orList = [];
        for (var hashtgaId of hashtagList) {
            orList.push({
                id: hashtgaId,
            });
        }

        htWhere = {
            [sequelize.Op.or]: orList,
        };
    }

    const subscriptionServices = await SubscriptionService.findAll(
        {
            include: [
                {
                    model: Hashtag,
                    attributes: ['name'],
                    where: htWhere,
                    required: false,
                },
            ],
            where: ssWhere,
        }
        /*
        {
            offset: pageDto.offset,
            limit: pageDto.limit,
        }
        */
    );
    var result = {
        subscriptionServices,
    };

    if (!pageDto.offset) {
        const hashtags = await Hashtag.findAll({
            where: {
                categoryId: ssDto.categoryId,
            },
        });
        const categories = await Category.findAll();

        result.hashtags = hashtags;
        result.categories = categories;
    }

    return result;
};

const getSubscriptionService = async (ssDto) => {
    var memberships = {};

    const subService = await SubscriptionService.findOne({
        include: [
            {
                model: Category,
                attributes: ['template', 'nameKr'],
            },
        ],
        where: {
            id: ssDto.id,
        },
    });

    // 월 구독료 평균
    var subServiceFee = 0;
    await ComparisonValue.findOne({
        attributes: [
            sequelize.cast(
                sequelize.fn('avg', sequelize.cast(sequelize.col('value'), 'int4')),
                'int4'
            ),
        ],
        include: [
            {
                model: ComparisonItem,
                where: {
                    code: 'MONTH_FEE',
                    categoryId: subService.categoryId,
                },
            },
        ],
        group: ['comparisonItem.id'],
        raw: true,
    }).then((result) => {
        subServiceFee = String(result.avg);
    });

    await Membership.findAll({
        include: [
            {
                model: ComparisonValue,

                include: [
                    {
                        model: ComparisonItem,
                        attributes: ['code', 'name', 'unit', 'type', 'sort'],
                    },
                ],

                raw: true,
                attributes: ['value'],
            },
        ],
        //raw: true,
        where: {
            subscriptionServiceId: ssDto.id,
        },
        order: [
            ['grade', 'ASC'],
            [ComparisonValue, ComparisonItem, 'sort', 'ASC'],
        ],
    }).then((result) => {
        memberships = result.map((el) => el.get({ plain: true }));
    });

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
                    logger.debug(JSON.parse(value));
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
    let ssWhere = {
        [sequelize.Op.or]: [
            {
                nameEng: {
                    [sequelize.Op.like]: '%' + ssDto.query + '%',
                },
            },
            {
                nameKr: {
                    [sequelize.Op.like]: '%' + ssDto.query + '%',
                },
            },
            {
                description: {
                    [sequelize.Op.like]: '%' + ssDto.query + '%',
                },
            },
        ],
    };

    const result = await Category.findAll({
        attributes: ['nameKr'],
        include: [
            {
                model: SubscriptionService,
                attributes: ['nameKr', 'nameEng', 'bigLogoPath', 'smallLogoPath', 'description'],
                where: ssWhere,
            },
        ],
    });

    return result;
};

const getCompareSubscriptionService = async (ssDto) => {
    const main = await ComparisonValue.findOne({
        attributes: [sequelize.fn('avg', sequelize.cast(sequelize.col('value'), 'int4'))],
        include: [
            {
                model: ComparisonItem,
                where: {
                    code: 'MONTH_FEE',
                    categoryId: ssDto.categoryId,
                },
            },
        ],
        group: ['comparisonItem.id'],
        raw: true,
    });
    /*
    const main = await ComparisonItem.findAll({
        attributes: [
            sequelize.fn('SUM', sequelize.cast(sequelize.col('comparisonValues.value'), 'int4')),
        ],
        include: [
            {
                model: ComparisonValue,
                attributes: ['value'],
            },
        ],
        where: {
            code: 'MONTH_FEE',
            categoryId: ssDto.categoryId,
        },
        group: ['comparisonItem.id'],
        raws: true,
    });*/

    return main;
};

module.exports = {
    getSubscriptionService,
    getMainSubscriptionService,
    getSubscriptionServiceList,
    getSubscriptionServiceSearch,
    getCompareSubscriptionService,
};
