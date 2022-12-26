const db = require("../db")
const User = require("./User")

const Post = db.define('post', {
  titulo:{
    type: db.Sequelize.STRING
  },
  conteudo:{
    type: db.Sequelize.TEXT
  }
})
Post.belongsTo(User, {
  constraint: true,
  foreingkey: 'user_id'
})


//Criação da tabela
//Post.sync({force: true})



module.exports = Post;


/** Inserir de forma manual
Postagem.create({
  titulo: 'Felicitações',
  conteudo: '“Desejo a você um ótimo aniversário, e que você possa realizar todos os desejos do seu coração.” “Parabéns, que o seu dia seja tão especial quanto você. Desejo muito amor, paz, felicidade e saúde.” '
})

*/




