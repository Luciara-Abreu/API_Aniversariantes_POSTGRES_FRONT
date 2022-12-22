const express = require("express")
const router  = express()
const admController = require('../controller/admController')

//Informar a aplicação que posso receber os dados em formato Json
//router.use(express.json())

console.log('********************* Rotas *********************')

router.get('/ListAdm', admController.getAll);
router.get('/Adm/:id', admController.getOne);
router.post('/AddAdm', admController.create);
router.patch('/UpdateAdm/:id', admController.update);
router.delete('/DeleteAdm/:id', admController.delete);


module.exports =  router
