const { Sequelize } = require("sequelize")

const sequelize = new Sequelize('db_aniver','root','123456', {
    host: 'localhost',
    dialect: 'mysql'
})

 
sequelize.authenticate()
.then(function(){
    console.log('Conectado!')
}).catch(function(err){
    console.log('Falha ao se conectar' + err.message)
})

module.exports = sequelize
