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
  await User.findOrBuild()
  .then(data =>{
    res.send(data)
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel listar os Aniversariantes. Tente novamente!'
    })
  })
});

//Add um aniversariante 
exports.createOne = app.post('/AddAniver', async (req, res)=> {
  console.log(req.body)

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


// Atualizando aniversariante
exports.updateOne = app.patch('/UpdateAniver', async (req, res)=> {
  const aniverId = req.params.id;
  const aniverUser = Object.assign({ id: aniverId }, req.body);

  res.status(200).json({
    status: 'success',
    data: {
      aniverUser
    }
});
})

exports.deleteOne = (req, res) => {
  res.status(204).json({
      status: 'success',
      data: null,
  });
};

// Deletando um aniversariante 
exports.deleteOne = app.patch('/DeleteAniver', async (req, res)=> {
  res.status(204).json({
    status: 'success',
    data: null,
  });
})