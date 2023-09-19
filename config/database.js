const { Sequelize } = require('sequelize')

const connection = new Sequelize ('sakila' ,'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection