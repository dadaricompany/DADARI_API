const {
    Category,
    ComparisonItem,
    ComparisonValue,
    SubscriptionService,
    Membership,
    Hashtag,
} = require('../models');
const sequelize = require('sequelize');

// MAIN
const getMainSubscriptionService = async () => {
    const main = await Category.findAll({
        include: [
            {
                model: SubscriptionService,
            },
        ],
    });

    return main;
};

// LIST
const getSubscriptionServiceList = async (categoryId, query, hashtags) => {
    // subscriptionService 검색조건
    let ssWhere = {
        categoryId: categoryId,
        [sequelize.Op.or]: [
            {
                nameEng: {
                    [sequelize.Op.like]: '%' + query + '%',
                },
            },
            {
                nameKr: {
                    [sequelize.Op.like]: '%' + query + '%',
                },
            },
            {
                description: {
                    [sequelize.Op.like]: '%' + query + '%',
                },
            },
        ],
    };

    // hashtag 검색조건
    let htWhere = {};
    if (hashtags) {
        let hashtagList = hashtags.split(',');
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

    return subscriptionServices;
};

const getSubscriptionServiceById = async (subscriptionServiceId) => {
    return await SubscriptionService.findOne({
        include: [
            {
                model: Category,
                attributes: ['template', 'nameKr'],
            },
        ],
        where: {
            id: subscriptionServiceId,
        },
    });
};

// SEARCH
const getSubscriptionServiceSearch = async (query) => {
    let ssWhere = {
        [sequelize.Op.or]: [
            {
                nameEng: {
                    [sequelize.Op.like]: '%' + query + '%',
                },
            },
            {
                nameKr: {
                    [sequelize.Op.like]: '%' + query + '%',
                },
            },
            {
                description: {
                    [sequelize.Op.like]: '%' + query + '%',
                },
            },
        ],
    };

    const result = await Category.findAll({
        attributes: ['nameKr'],
        include: [
            {
                model: SubscriptionService,
                attributes: [
                    'id',
                    'nameKr',
                    'nameEng',
                    'defaultLogoPath',
                    'detailLogoPath',
                    'listLogoPath',
                    'description',
                    'categoryId',
                ],
                where: ssWhere,
            },
        ],
    });
    return result;
};

const getSubscriptionServiceCompare = () => {};

const getHashTagByCategoryId = async (categoryId) => {
    const hashtags = await Hashtag.findAll({
        where: {
            categoryId,
        },
    });

    return hashtags;
};

const getCategoryList = async () => {
    return await Category.findAll();
};

const getAvgMonthFee = async (categoryId) => {
    // 월 구독료 평균
    var monthFee = 0;
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
                    categoryId: categoryId,
                },
            },
        ],
        group: ['comparisonItem.id'],
        raw: true,
    }).then((result) => {
        monthFee = String(result.avg);
    });

    return monthFee;
};

const getMembershipBySubscriptionServiceId = async (subscriptionServiceId) => {
    var memberships;

    await Membership.findAll({
        include: [
            {
                model: ComparisonValue,

                include: [
                    {
                        model: ComparisonItem,
                        attributes: ['code', 'name', 'unit', 'type', 'imgPath', 'sort'],
                    },
                ],

                raw: true,
                attributes: ['value'],
            },
        ],
        //raw: true,
        where: {
            subscriptionServiceId,
        },
        order: [
            ['grade', 'ASC'],
            [ComparisonValue, ComparisonItem, 'sort', 'ASC'],
        ],
    }).then((result) => {
        // dataValues만 반환하기 위해서
        memberships = result.map((el) => el.get({ plain: true }));
    });

    return memberships;
};

module.exports = {
    getMainSubscriptionService,
    getSubscriptionServiceList,
    getSubscriptionServiceById,
    getSubscriptionServiceSearch,
    getSubscriptionServiceCompare,
    getHashTagByCategoryId,
    getCategoryList,
    getAvgMonthFee,
    getMembershipBySubscriptionServiceId,
};
