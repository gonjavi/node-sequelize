const express = require('express');
let app = express();
const cors = require('cors');
app.use(cors());
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(require('./controllers/students'));

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('University', 'javi', 'conexion.P9', {
  host: 'localhost',
  dialect: 'mssql',
  dialectOptions: {
    // Observe the need for this nested `options` field for MSSQL
    options: {
      // Your tedious options here
      useUTC: false,
      dateFirst: 1
    }
  }
});

const conect = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

conect()

app.listen(3001, function () {
  console.log('Server is running in port 3001');
});