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

const sync = async () => {
  await sequelize.sync();
  console.log("All models were synchronized successfully.");
}


// `sequelize.define` also returns the model
console.log(Student === sequelize.models.Student); // true

module.exports = sequelize.model('Student', Student);