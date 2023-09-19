const db = require('../config/database')
const {DataTypes, Model} = require('sequelize')

class Category extends Model { }

Category.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            field: 'category_id'
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize: db,
        modelName: 'category'
    }
)

module.exports = Category