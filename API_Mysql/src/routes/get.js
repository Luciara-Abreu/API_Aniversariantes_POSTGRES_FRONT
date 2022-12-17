
  const ListUsers = require("../controller/controllerUsers.js")
  var router = require('express').Router() 
 
  // Recuperando todos os tutoriais
  router.get('/', ListUsers.findAll)
  
  // Recuperando um único Tutorial com id
  router.get('/:id', ListUsers.findOne)
  
