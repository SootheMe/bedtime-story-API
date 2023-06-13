const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Story = sequelize.define('Story',{
    title: {
        type: DataTypes.STRING
    },
    author: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.TEXT
    },
    content: {
        type: DataTypes.STRING
    },
    cover: {
        type: DataTypes.STRING
    }
});

module.exports = Story;
