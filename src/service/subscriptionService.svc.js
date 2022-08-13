const SubscriptionService = require('../models/subscriptionService');
const Category = require('../models/category');
const logger = require('../../config/winston');
const { models } = require('../models');

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
    logger.debug(JSON.stringify(main));

    return subService;
};

module.exports = {
    getSubscriptionService,
    getMainSubscriptionService,
};
