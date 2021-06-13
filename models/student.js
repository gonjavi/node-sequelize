const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mssql::memory:');

const Student = sequelize.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
});

