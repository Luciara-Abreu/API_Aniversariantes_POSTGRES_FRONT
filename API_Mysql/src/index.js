const express = require("express")
const app = express()
const routerUser = require('./routes/userRoute');
const routerAdm = require('./routes/admRoute');
const port = 8081

//Informar a aplicação que posso receber os dados em formato Json
app.use(express.json())

console.log('-------------------------------------------------')
app.use(routerUser);
app.use(routerAdm);






app.listen(port, () => console.log( `Server running on port ================>>>>`, {port}));

