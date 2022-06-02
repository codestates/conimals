'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class postComments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: 'userId',
        sourceKey: 'id',
        as: 'userInfo',
      });
      this.belongsTo(models.posts, {
        foreignKey: 'postId',
        sourceKey: 'id',
      });
    }
  }
  postComments.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      comment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'postComments',
      freezeTableName: true,
    }
  );
  return postComments;
};
