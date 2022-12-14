var  {} = require("dotenv/config")
var express = require("express")
var admin = require("firebase-admin")
var serviceAccount = require("../firebase/accountKey.json")



admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express()
const port = 6000  


//GET Lista todos os usuários
app.get('/listUsers', (req, res)=> {
  admin.firestore()
  .collection("users")
  .get()
  .then(snapshot => {
    const usersDb = snapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }))
    res.json(usersDb)
  })
})


//GET  http://api.agenda-de-aniversariantes/:id
//POST http://api.agenda-de-aniversariantes
//PUT GET http://api.agenda-de-aniversariantes/:id
//DELETE GET http://api.agenda-de-aniversariantes/:id

app.listen(port, () => console.log( `Server running on port ================>>>> ${port}`));



