const { Sequelize } = require("sequelize")
const db = require("../db")
/**
 * User model
 */
const User = db.define('users', {
  name: {
    type: db.Sequelize.STRING,
  },
  birthDate: {
    type: db.Sequelize.STRING
  },
  sexualOrientation:{
    type: db.Sequelize.STRING
  },
  email: {
    type: db.Sequelize.STRING,
  },
  lastEmail: {
    type: db.Sequelize.STRING,
  },
  fone:{
    type: db.Sequelize.STRING
  },
});

//se não existir a tabela, crie a tabela.
//User.sync()

//Aqui força criar a tabela e essa instrução pode sobreescrever a tabela existente. 
//User.sync({force: true})

//Essa instrução valida se tem algo diferente na tabela e atualiza a mesma caso tenha mudanças
//User.sync({alter: true})
module.exports = User