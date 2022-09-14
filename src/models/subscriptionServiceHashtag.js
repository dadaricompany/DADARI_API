const Sequelize = require('sequelize');

module.exports = class SubscriptionServiceHashtag extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {},
            {
                sequelize,
                timestamps: true,
                modelName: 'subscriptionServiceHashtag',
                tableName: 'subscription_service_hashtag',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.SubscriptionServiceHashtag.belongsTo(db.Hashtag, {
            foreignKey: 'hashtagId',
        });

        db.SubscriptionServiceHashtag.belongsTo(db.SubscriptionService, {
            foreignKey: 'subscriptionServiceId',
        });

        // 기본적으로 생성되는 id 삭제, bulkCreate로 데이터 insert하기 위해 사용.
        db.SubscriptionServiceHashtag.removeAttribute('id');
    }
};
