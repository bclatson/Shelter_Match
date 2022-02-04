const {Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class PotentialOwner extends Model {}

PotentialOwner.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, 
            primaryKey: true, 
            autoIncrement: true, 
        }, 
        name: {
            type: DataTypes.STRING,
            allowNull: false, 
        }, 
        email: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        dog_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'Dog',
              key: 'id',
            },
    }, 
    },
    {
        sequelize,
        timestamps: true,
        underscored: true,
        freezeTableName: true,
        modelName: 'Owner',

    });

    module.exports = PotentialOwner;