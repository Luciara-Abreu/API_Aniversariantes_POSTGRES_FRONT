const { Sequelize } = require("sequelize")
const db = require("../db")
/**
 * User model
 * para rodar só esse script com nodemon, entrar na pasta models e rodar => nodemon Adm.js
 */
const Adm = db.define('adm', {
  name: {
    type: Sequelize.STRING,
  },
  sexualOrientation:{
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
  },
  password: {
    type: Sequelize.INTEGER,
  }
});

//Não executar essa linha novamente pois isso apaga os dados do banco e recria uma nova tabela
//Adm.sync({force: true})

module.exports = Adm