const Sequelize = require('sequelize');

module.exports = class ComparisonValue extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                value: {
                    type: Sequelize.STRING(50),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: 'ComparisonValue',
                tableName: 'comparison_value',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {}
};
