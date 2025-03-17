'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class HomeDecorproduct extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  HomeDecorproduct.init({
    ProductNmae: DataTypes.STRING,
    projectDescription: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    productCategory: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'HomeDecorproduct',
  });
  return HomeDecorproduct;
};