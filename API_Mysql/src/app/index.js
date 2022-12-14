const mysql = require('mysql2');
var express = require("express")
var connection = require("../conection/index.js")

const app = express()
const port = connection.port  

console.log(connection)


//GET  
//POST
//PUT GET
//DELETE GET 

app.listen(port, () => console.log( `Server running on port ================>>>> ${port}`));



