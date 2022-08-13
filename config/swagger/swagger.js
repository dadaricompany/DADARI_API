const swaggerUi = require('swagger-ui-express');
const swaggereJsdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        info: {
            title: 'DADARI API',
            version: '1.0.0',
            description: 'dadari api documentation',
        },
        host: 'localhost:4000',
        basePath: '/',
    },
    apis: ['./src/controller/*.js'],
};

const specs = swaggereJsdoc(options);
module.exports = {
    swaggerUi,
    specs,
};
