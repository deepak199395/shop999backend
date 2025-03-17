'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Kichenproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Kichenproduct.init({
    ProductNmae: DataTypes.STRING,
    projectDescription: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    productCategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Kichenproduct',
  });
  return Kichenproduct;
};