const SubscriptionService = require('../models/subscriptionService');

const getSubscriptionService = async (ssDto, pageDto) => {
    const subService = await SubscriptionService.findAll({
        offset: pageDto.offset,
        limit: pageDto.limit,
    });

    return subService;
};

module.exports = { getSubscriptionService };
