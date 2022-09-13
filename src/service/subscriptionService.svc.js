const {
    Category,
    ComparisonItem,
    ComparisonValue,
    SubscriptionService,
    Membership,
    Hashtag,
} = require('../models');
const { Op } = require('sequelize');

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
        [Op.or]: [
            {
                nameEng: {
                    [Op.like]: '%' + ssDto.query + '%',
                },
            },
            {
                nameKr: {
                    [Op.like]: '%' + ssDto.query + '%',
                },
            },
            {
                description: {
                    [Op.like]: '%' + ssDto.query + '%',
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
            [Op.or]: orList,
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
    /*
    const subServiceFee = await Category.findOne({
        include: [
            {
                model: Category,
                attributes: ['template', 'nameKr'],
            },
        ],
        where: {
            id: ssDto.id,
        },
    });*/

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

    await Membership.findAll({
        include: [
            {
                model: ComparisonValue,

                include: [
                    {
                        model: ComparisonItem,
                        attributes: ['name', 'unit', 'type', 'sort'],
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
                if (!memberships[mindex].comparisonValues[index]) {
                    comparisonValues.push(comparisonValueArr);
                    break tmplt;
                }

                // 바차트(월구독료) 평균 구독료 추가
                if (
                    memberships[mindex].comparisonValues[index].comparisonItem.type === 'BARCHART'
                ) {
                    let value = memberships[mindex].comparisonValues[index].value;
                    let avgValue = {};
                    let multiValue = {};
                    let label = [];
                    let data = [];

                    label.push(subService.nameKr); // 구독서비스 이름 라벨추가
                    label.push(subService.category.nameKr + ' 평균'); // 구독서비스 카테고리평균 라벨추가
                    data.push(value); // 구독서비스 값 추가
                    data.push(value); // 구독서비스 값 추가
                }
                comparisonValueArr.push(memberships[mindex].comparisonValues[index]);
                index++;
            }

            comparisonValues.push(comparisonValueArr);
            // 템플릿 형태로 데이터 만드는 로직
        }

        memberships[mindex].comparisonValues = comparisonValues;
    }

    subService.dataValues.memberships = memberships;

    return subService;
};

const getCompareSubscriptionService = async (ssDto) => {
    const main = await ComparisonItem.findAll({
        attributes: [sequelize.fn('SUM', sequelize.col('comparisonValues.value'))],
        include: [
            {
                model: ComparisonValue,
            },
        ],
        where: {
            code: 'MONTH_FEE',
            categoryId: ssDto.categoryId,
        },
    });

    return main;
};

module.exports = {
    getSubscriptionService,
    getMainSubscriptionService,
    getSubscriptionServiceList,
    getCompareSubscriptionService,
};
