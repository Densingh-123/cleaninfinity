const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
});

User.sync({ force: false })
  .then(() => console.log('User table created'))
  .catch(err => console.log('Error creating table:', err));

module.exports = User;
