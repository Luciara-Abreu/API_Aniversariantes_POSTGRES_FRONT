import {} from 'dotenv/config'
import express from 'express'
import admin from 'firebase-admin'
import serviceAccount  from '../db/serviceAccountKey.js'

const app = express()
const port = 6000  

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});


//GET  http://api.agenda-de-aniversariantes
app.get('/users', (req, res)=> {
  admin.firestore()
  .collection("usersCollectionRef")
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



