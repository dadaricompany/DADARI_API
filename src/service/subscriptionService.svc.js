const SubscriptionService = require('../models/subscriptionService');
const Category = require('../models/category');

const getSubscriptionService = async (ssDto, pageDto) => {
    const subService = await SubscriptionService.findAll({
        offset: pageDto.offset,
        limit: pageDto.limit,
    });

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
