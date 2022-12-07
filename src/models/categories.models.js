const db = require('../utils/databases')
const {DataTypes} = require('sequelize')
const Categories = db.define('categories', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            len: [2, 20]
        }
    }

}, {
    timestamps: false
})

module.exports = Categories