const express = require('express');
const User = require('../models/User')

const app = express();
app.use(express.json())

// tras todos os Aniversariantes
exports.getAll = app.get('/ListAniver', async (req, res)=> {
  await User.findAll()
  .then(data =>{
    res.send(data)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar os Aniversariantes. Tente novamente!'
    })
  })
})  

// tras um  Aniversariantes
exports.getOne = app.get('/Aniver/:id', async (req, res) => {
  await User.findOne({where: {id: req.params.id}})
  .then(data =>{
    res.send(data)
    //console.log(req.params)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar os Aniversariantes. Tente novamente!'
    })
});
})

//Add um aniversariante 
exports.create = app.post('/AddAniver', async (req, res)=> {
  await User.create(req.body)
  .then(()=>{
    return res.json({
      erro:false,
      messagem: 'Aniversariante adicionado com sucesso!!'
    })
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel cadastrar um novo Aniversariante. Tente novamente!'
    })
  })
})

//O verbo PUT faz com que vc atualize todo o objeto e caso esqueca de algum ele seta null ou exclui

// Atualizando aniversariante com o verbo patch que atualiza apenas um dado 
exports.update = app.patch('/UpdateAniver/:id', async (req, res)=> {
  await User.update('UPDATE Users SET',{where: {id: req.params.id}})
  .then(()=>{
    return res.json({
      erro:false,
      messagem: `Dados atualizados com sucesso!!`
    })
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel atualizar o Aniversariante. Tente novamente!'
    })
  })
})



// Deletando um aniversariante 
exports.delete = app.patch('/DeleteAniver', async (req, res)=> {
  let id = req.params.id;
  res.status(200).send(`Requisição recebida com sucesso! ${id}`);
})