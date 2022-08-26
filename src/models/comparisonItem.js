const Sequelize = require('sequelize');

module.exports = class ComparisonItem extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                name: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                unit: {
                    type: Sequelize.STRING(20),
                    allowNull: false,
                },
                type: {
                    type: Sequelize.STRING(20),
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
                modelName: 'comparisonItem',
                tableName: 'comparison_item',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.ComparisonItem.belongsTo(db.Category, { foreignKey: 'categoryId' });
    }
};
