const express = require("express")
const app = express()
const handlebars = require('express-handlebars')

//Config = Aqui falamos para o express que queremos usar o bahdlebars como template end
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const port = 8081
console.log('-------------------------------------------------')
console.log('********************* Rotas *********************')
//GET  
app.get('/cad', function (req, res) {
res.send('Rota de cadastro de post....')})

//POST
//PUT GET
//DELETE GET 

app.listen(port, () => console.log( `Server running on port ================>>>>`, {port}));



