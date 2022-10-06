const Sequelize = require('sequelize');
const db = require('../config/database');

const Doge = db.define('doge', {
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    fun: {
        type: Sequelize.STRING
    }
});

module.exports = Doge;