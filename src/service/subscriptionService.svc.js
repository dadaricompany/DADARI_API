const {
    ComparisonItem,
    Category,
    ComparisonValue,
    SubscriptionService,
    Membership,
} = require('../models');

const getSubscriptionService = async (ssDto) => {
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

    const memberships = await Membership.findAll({
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
        //order: [['comparisonItem.sort', 'ASC']],
    });

    subService.dataValues.memberships = memberships;

    return subService;
};

const getSubscriptionServiceList = async (ssDto, pageDto) => {
    const subService = await SubscriptionService.findAll(
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

    return subService;
};

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

module.exports = {
    getSubscriptionService,
    getMainSubscriptionService,
    getSubscriptionServiceList,
};
