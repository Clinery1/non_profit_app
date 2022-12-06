const { Model, DataTypes } = require('sequelize');
const { Organizations } = require('.');
const sequelize = require('../config/connection');

class Organizations extends Model {}

Organizations.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    funding_goal: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    organization_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'organization',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'organization',
  }
);

module.exports = Organizations;
