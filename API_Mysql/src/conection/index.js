const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost', // O host do banco. Ex: localhost
    port: 3306,
    user: 'root', // Um usuário do banco. Ex: user 
    password: '123456', // A senha do usuário. Ex: user123
    database: 'db_aniver' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});


connection.connect((err) => {
    if(err) return console.log(err);
    console.log('conectou!');
  })



