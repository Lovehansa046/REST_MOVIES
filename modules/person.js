const db = require('../config/database')
const {Sequelize} = require('sequelize')

const Person = db.define('person', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false,
})


module.exports = Person