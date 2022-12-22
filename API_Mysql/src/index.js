const express = require("express")
var bodyParser = require('body-parser');
const app = express()
app.use(bodyParser.json({ type: 'application/json' }));


const aniverController = require('./controller/aniverController')

//Informar a aplicação que posso receber os dados em formato Json
app.use(express.json())

const port = 8081
console.log('-------------------------------------------------')
console.log('********************* Rotas *********************')


app.get('/ListAniver', aniverController.getAll);
app.get('/Aniver/:id', aniverController.getOne);
app.post('/AddAniver', aniverController.create);
app.patch('/UpdateAniver/:id', aniverController.update);
app.delete('/DeleteAniver/:id', aniverController.delete);


app.listen(port, () => console.log( `Server running on port ================>>>>`, {port}));



