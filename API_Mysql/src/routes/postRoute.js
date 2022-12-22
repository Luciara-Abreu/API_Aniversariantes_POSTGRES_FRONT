const express = require("express")
const router  = express()
const postController = require('../controller/postController')

//Informar a aplicação que posso receber os dados em formato Json
//router.use(express.json())

console.log('**************** Rotas de Post *********************')

router.get('/ListPost', postController.getAll);
router.get('/Post/:id', postController.getOne);
router.post('/AddPost', postController.create);
router.patch('/UpdatePost/:id', postController.update);
router.delete('/DeletePost/:id', postController.delete);


module.exports =  router
