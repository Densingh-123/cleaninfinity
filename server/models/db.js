const { Sequelize } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(
  dbConfig.database,
  dbConfig.username,
  dbConfig.password,
  {
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    port: dbConfig.port,
  }
);

sequelize.authenticate()
  .then(() => console.log('Database connected successfully.'))
  .catch(err => console.log('Error connecting to the database:', err));

module.exports = sequelize;