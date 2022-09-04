const {
    ComparisonItem,
    Category,
    ComparisonValue,
    SubscriptionService,
    Membership,
} = require('../models');

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
    const subscriptionServices = await SubscriptionService.findAll(
        {
            where: {
                categoryId: ssDto.categoryId,
            },
        },
        {
            offset: pageDto.offset,
            limit: pageDto.limit,
        }
    );

    const categories = await Category.findAll();

    var result = {
        categories,
        subscriptionServices,
    };

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
