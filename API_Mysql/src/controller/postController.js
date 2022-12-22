const express = require('express');
const Post = require('../models/Post')

const app = express();
app.use(express.json())

// tras todos os Aniversariantes
exports.getAll = app.get('/ListPost', async (req, res)=> {
  await Post.findAll()
  .then(data =>{
    res.send(data)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar os Posts. Tente novamente!'
    })
  })
})  

// tras um  Aniversariantes
exports.getOne = app.get('/Post/:id', async (req, res) => {
  await Post.findOne({where: {id: req.params.id}})
  .then(data =>{
    res.send(data)
    //console.log(req.params)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar o Post. Tente novamente!'
    })
});
})

//Add um aniversariante 
exports.create = app.post('/AddPost', async (req, res)=> {
  await Post.create(req.body)
  .then(()=>{
    return res.json({
      erro:false,
      messagem: 'Post adicionado com sucesso!!'
    })
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel cadastrar um novo Post. Tente novamente!'
    })
  })
})
  
exports.update = app.patch('/UpdatePost/:id',  async (req, res)=> {
  const data = {
    name: req.body.name,
    birthDate: req.body.birthDate,
    sexualOrientation: req.body.sexualOrientation,
    email: req.body.email,
    lastEmail: req.body.lastEmail,
    fone: req.body.fone
  } 
  await Post.update(data,{ where: { id: req.params.id }}
).then(()=>{
    return res.json({
      messagem: `Post atualizado com sucesso!!`
    })
  }).catch(()=>{
    return res.status(400).json({
      messagem: 'Erro: Não foi possivel atualizar o Post. Tente novamente!'
    })
  })  
})  

// Deletando um aniversariante data,{ where: { id: req.params.id }}
exports.delete = app.delete('/DeletePost/:id', async (req, res)=> {
  await Post.destroy({where: {id: req.params.id}})
  .then(()=>{
    return res.json({
      messagem: `Post deletado com sucesso!!`
    })
  }).catch(()=>{
    return res.status(400).json({
      messagem: 'Erro: Não foi possivel deletar o Post. Tente novamente!'
    })
  })  
})  
