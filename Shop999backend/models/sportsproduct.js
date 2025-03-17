'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sportsproduct extends Model {
  
    static associate(models) {
    }
  }
  Sportsproduct.init({
    ProductNmae: DataTypes.STRING,
    projectDescription: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    productCategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Sportsproduct',
  });
  return Sportsproduct;
};