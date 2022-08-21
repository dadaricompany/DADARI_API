const Sequelize = require('sequelize');

module.exports = class Category extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                nameKr: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                nameEng: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                description: {
                    type: Sequelize.STRING(500),
                    allowNull: true,
                },
                logoPath: {
                    type: Sequelize.STRING(100),
                    allowNull: false,
                },
                sort: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: 'category',
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
