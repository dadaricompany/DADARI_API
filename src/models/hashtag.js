const Sequelize = require('sequelize');

module.exports = class Hashtag extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: 'hashtag',
                tableName: 'hashtag',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Hashtag.belongsToMany(db.SubscriptionService, {
            through: 'subscriptionServiceHashtag',
            foreignKey: 'hashtagId',
        });
        db.Hashtag.belongsTo(db.Category, { foreignKey: 'categoryId' });
    }
};
