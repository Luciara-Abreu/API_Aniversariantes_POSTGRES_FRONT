const express = require('express');
const Adm = require('../models/Adm')

const app = express();
app.use(express.json())

// tras todos os Aniversariantes
exports.getAll = app.get('/ListAdm', async (req, res)=> {
  await Adm.findAll()
  .then(data =>{
    res.send(data)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar os Adm. Tente novamente!'
    })
  })
})  

// tras um  Aniversariantes
exports.getOne = app.get('/Adm/:id', async (req, res) => {
  await Adm.findOne({where: {id: req.params.id}})
  .then(data =>{
    res.send(data)
    //console.log(req.params)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar os Adm. Tente novamente!'
    })
});
})

//Add um aniversariante 
exports.create = app.post('/AddAdm', async (req, res)=> {
  await Adm.create(req.body)
  .then(()=>{
    return res.json({
      erro:false,
      messagem: 'Adm adicionado com sucesso!!'
    })
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel cadastrar um novo Adm. Tente novamente!'
    })
  })
})
  
exports.update = app.patch('/UpdateAdm/:id',  async (req, res)=> {
  const data = {
    name: req.body.name,
    birthDate: req.body.birthDate,
    sexualOrientation: req.body.sexualOrientation,
    email: req.body.email,
    lastEmail: req.body.lastEmail,
    fone: req.body.fone
  } 
  await Adm.update(data,{ where: { id: req.params.id }}
).then(()=>{
    return res.json({
      messagem: `Adm atualizado com sucesso!!`
    })
  }).catch(()=>{
    return res.status(400).json({
      messagem: 'Erro: Não foi possivel atualizar o Adm. Tente novamente!'
    })
  })  
})  

// Deletando um aniversariante data,{ where: { id: req.params.id }}
exports.delete = app.delete('/DeleteAdm/:id', async (req, res)=> {
  await Adm.destroy({where: {id: req.params.id}})
  .then(()=>{
    return res.json({
      messagem: `Adm deletado com sucesso!!`
    })
  }).catch(()=>{
    return res.status(400).json({
      messagem: 'Erro: Não foi possivel deletar o Adm. Tente novamente!'
    })
  })  
})  
