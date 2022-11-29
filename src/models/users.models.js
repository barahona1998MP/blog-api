const {DataTypes} = require('sequelize')

const db = require('../utils/databases')

const Users = db.define('users', {
    id: {
        type: DataTypes.UUID,
        primaryKey: true
    },
    first_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    last_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    user_name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING
    },
    age: {
        type: DataTypes.INTEGER
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'normal'
    },
    country: {
        type: DataTypes.STRING(3)
    }
})

module.exports = Users