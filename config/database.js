const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('story_db', 'root', '1234', {
    host: '34.101.141.7',
    dialect: 'mysql'
});

module.exports = sequelize;
