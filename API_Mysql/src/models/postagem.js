const { Sequelize } = require("sequelize")
//const db = require("../db/index.js")
const db = require("../db")
/**
 * Postagem model
 */
const Postagem = db.define('postagems', {
  titulo:{
    type: db.Sequelize.STRING
  },
  conteudo:{
    type: db.Sequelize.TEXT
  }
})

//Criar a tabela
//Postagem.sync({force: true})



// criar a postagem

/**
 *
Postagem.create({
  titulo: 'Felicitações',
  conteudo: '“Desejo a você um ótimo aniversário, e que você possa realizar todos os desejos do seu coração.” “Parabéns, que o seu dia seja tão especial quanto você. Desejo muito amor, paz, felicidade e saúde.” '
})
 */