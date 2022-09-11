const {
    ComparisonItem,
    Category,
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

    const subService = await SubscriptionService.findOne({
        include: [
            {
                model: Category,
                attributes: ['template'],
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

const getCompareSubscriptionService = async (ssDto, pageDto) => {
    const main = await Category.findAll({
        include: [
            {
                model: SubscriptionService,
            },
        ],
    });

    return main;
};

module.exports = {
    getSubscriptionService,
    getMainSubscriptionService,
    getSubscriptionServiceList,
    getCompareSubscriptionService,
};
