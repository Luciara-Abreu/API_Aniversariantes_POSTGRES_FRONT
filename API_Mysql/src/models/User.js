const { Sequelize } = require("sequelize")
const db = require("../db/index.js")
/**
 * User model
 */
const User = db.define('user', {
  name: {
    type: Sequelize.STRING,
  },
  birthDate: {
    type: Sequelize.DATE
  },
  sexualOrientation:{
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING,
  },
  lastEmail: {
    type: Sequelize.STRING,
  },
  fone:{
    type: Sequelize.INTEGER
  },
});

//User.sync({force: true})