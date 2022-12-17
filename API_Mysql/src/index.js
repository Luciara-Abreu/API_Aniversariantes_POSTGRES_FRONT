const express = require("express")
const app = express()
const { Sequelize } = require("sequelize")
const db = require("./db")
const Post = require('./models/Post')
const User = require('./models/User')


//Informar a aplicação que posso receber os dados em formato Json
app.use(express.json())

const port = 8081
console.log('-------------------------------------------------')
console.log('********************* Rotas *********************')


//GET  
app.get('/cad', function (req, res) {
res.send('Rota de cadastro de post....')})


app.get('/listUsers', (req, res) => {
  db.query('select * from  users', res);
})

//POST
//aDD ADM
/*app.post('/AddAdmin', async (req, res)=> {
  console.log(req.body)

  await Adm.create(req.body)
  .then(()=>{
    return res.json({
      erro:false,
      messagem: 'ADM adicionado com sucesso!!'
    })
  }).catch(()=>{
    return res.status(400).json({
      erro:true,
      messagem: 'Erro: Não foi possivel cadastrar um novo ADM. Tente novamente!'
    })
  })
})
*/

//criando um susuário 
app.post('/AddAniver', async (req, res)=> {
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


// criando um post 
/*app.post('/addPost', async (req, res)=> {
  console.log(req.body)

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

*/

//PUT GET
//DELETE GET 

app.listen(port, () => console.log( `Server running on port ================>>>>`, {port}));



