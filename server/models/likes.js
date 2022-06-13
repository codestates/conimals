'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.users, {
        foreignKey: { name: 'userId', allowNull: false },
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.posts, {
        foreignKey: { name: 'postId', allowNull: true },
        onDelete: 'CASCADE',
      });
    }
  }
  likes.init(
    {
      userId: DataTypes.INTEGER,
      postId: DataTypes.INTEGER,
      createdAt: {
        defaultValue: new Date(),
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
      sequelize,
      modelName: 'likes',
    }
  );
  return likes;
};
