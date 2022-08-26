const { ComparisonItem, Category, ComparisonValue, SubscriptionService } = require('../models');

const getSubscriptionService = async (ssDto) => {
    const subService = await SubscriptionService.findOne({
        where: {
            id: ssDto.id,
        },
    });

    const values = await ComparisonValue.findAll({
        include: [
            // ['id', 'userId] === id AS userId
            {
                model: ComparisonItem,
                attributes: ['name', 'unit', 'type', 'sort'],
            },
        ],
        raw: true,
        where: {
            subscriptionServiceId: ssDto.id,
        },
        //order: [['comparisonItem.sort', 'ASC']],
    });

    subService.dataValues.compareValues = values;

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
};
