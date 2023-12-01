'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Discussion, { foreignKey: "discussionId" });
    }
  }
  Post.init({
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    discussionId: DataTypes.INTEGER,
    content: DataTypes.STRING,
    sentimentScore: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};