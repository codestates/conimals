'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  users.init({
    userName: DataTypes.STRING,
    userEmail: DataTypes.STRING,
    password: DataTypes.STRING,
    kakaoId: DataTypes.STRING,
    kakaoOauthToken: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'users',
    freezeTableName: true,
  });
  return users;
};