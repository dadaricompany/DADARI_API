const Sequelize = require('sequelize');

module.exports = class ComparisonValue extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                value: {
                    type: Sequelize.STRING(200),
                    allowNull: true,
                },
            },
            {
                sequelize,
                timestamps: true,
                modelName: 'comparisonValue',
                tableName: 'comparison_value',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.ComparisonValue.belongsTo(db.Membership, {
            foreignKey: 'membershipId',
        });
        db.ComparisonValue.belongsTo(db.ComparisonItem, { foreignKey: 'comparisonItemId' });
    }
};
