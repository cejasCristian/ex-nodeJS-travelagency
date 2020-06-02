const Sequelize = require('sequelize');

const db = require('../config/database');

const Experience = db.define('experience', {
    name: {
        type: Sequelize.STRING
    },
    mail: {
        type: Sequelize.STRING
    },
    message: {
        type: Sequelize.STRING
    },
});

module.exports = Experience;