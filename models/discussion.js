'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Discussion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Prompter, { foreignKey: "prompterId" })
    }
  }
  Discussion.init({
    discuccionId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true

    },
    prompterId: DataTypes.INTEGER,
    prompt: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Discussion',
  });
  return Discussion;
};