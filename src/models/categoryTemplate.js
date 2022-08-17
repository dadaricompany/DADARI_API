const Sequelize = require('sequelize');

module.exports = class CategoryTemplate extends Sequelize.Model {
    static init(sequelize) {
        return super.init(
            {
                type: {
                    type: Sequelize.STRING(50),
                    allowNull: false,
                },
                template: {
                    type: Sequelize.STRING(500),
                    allowNull: false,
                },
            },
            {
                sequelize,
                timestamps: false,
                modelName: 'categoryTemplate',
                tableName: 'category_template',
                schema: 'dadari-db',
                paranoid: false,
                charset: 'utf8',
                collate: 'utf8_general_ci',
            }
        );
    }
    static associate(db) {
        db.CategoryTemplate.hasMany(db.Category, { foreignKey: 'categoryTemplateId' });
    }
};
