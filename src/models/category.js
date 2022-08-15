const Sequelize = require('sequelize');

module.exports = class Category extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                description: {
                    type: Sequelize.STRING(500),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: 'Category',
                tableName: 'category',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.Category.hasMany(db.SubscriptionService, { foreignKey: 'categoryId' });
        db.Category.hasMany(db.ComparisonItem, { foreignKey: 'categoryId' });
        db.Category.hasMany(db.ComparisonValue, { foreignKey: 'categoryId' });
    }
};
