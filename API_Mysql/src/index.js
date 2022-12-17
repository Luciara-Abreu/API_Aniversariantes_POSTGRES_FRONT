const express = require("express")
const app = express()
const aniverController = require('./controller/aniverController')

//Informar a aplicação que posso receber os dados em formato Json
app.use(express.json())

const port = 8081
console.log('-------------------------------------------------')
console.log('********************* Rotas *********************')

app.get('/ListAniver', aniverController.getAll);
app.get('/Aniver/:id', aniverController.getOne);
app.post('/AddAniver', aniverController.createOne);
app.patch('/UpdateAniver/:id', aniverController.updateOne);
app.delete('/DeleteAniver/:id', aniverController.deleteOne);


app.listen(port, () => console.log( `Server running on port ================>>>>`, {port}));



