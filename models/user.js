'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsTo(models.Rol)
    }
  }
  User.init({
    nombre_usuario: DataTypes.STRING,
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    contraseña: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    timestamps: true
  });
  return User;
};