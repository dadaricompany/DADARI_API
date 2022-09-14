const Sequelize = require('sequelize');

module.exports = class Membership extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                grade: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: 'membership',
                tableName: 'membership',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Membership.belongsTo(db.SubscriptionService, {
            foreignKey: 'subscriptionServiceId',
        });
        db.Membership.hasMany(db.ComparisonValue, { foreignKey: 'membershipId' });
    }
};
