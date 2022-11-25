import {} from 'dotenv/config'
import express from 'express'
import admin from "firebase-admin"

admin.initializeApp();
//const db = admin.firestore();

const app = express()
const port = 6000  

//GET 
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



