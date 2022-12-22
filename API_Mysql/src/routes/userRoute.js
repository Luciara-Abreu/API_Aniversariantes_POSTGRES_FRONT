const express = require("express")
const router  = express()
const userController = require('../controller/userController')

//Informar a aplicação que posso receber os dados em formato Json
//router.use(express.json())

console.log('**************** Rotas de User *********************')

router.get('/ListAniver', userController.getAll);
router.get('/Aniver/:id', userController.getOne);
router.post('/AddAniver', userController.create);
router.patch('/UpdateAniver/:id', userController.update);
router.delete('/DeleteAniver/:id', userController.delete);


module.exports =  router
