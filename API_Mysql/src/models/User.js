const db = require("../db")
/**
 * User model
 */
const User = db.define('users', {
  name: {type: db.Sequelize.STRING, allowNull: false },
  birthDate: {type: db.Sequelize.DATE, allowNull: false },
  sexualOrientation:{type: db.Sequelize.STRING, allowNull: false},
  email: {type: db.Sequelize.STRING, allowNull: false},
  lastEmail: {type: db.Sequelize.STRING, allowNull: false},
  fone:{type: db.Sequelize.STRING, allowNull: false},
})

//se não existir a tabela, crie a tabela.
//User.sync()

//Aqui força criar a tabela e essa instrução pode sobreescrever a tabela existente. 
//User.sync({force: true})

//Essa instrução valida se tem algo diferente na tabela e atualiza a mesma caso tenha mudanças
//User.sync({alter: true})
module.exports = User
