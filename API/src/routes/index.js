import {} from 'dotenv/config'
import express from 'express'
import db  from '../db/firebase.js'

const app = express()
const port = 6000  
app.listen(port, () => console.log( `Server running on port ================>>>> ${port}`))



//GET 
app.get('/listUsers', async(req, res)=> {
  const usersCollectionRef = collection(db, "users")
  const data = await getDocs(usersCollectionRef)
  const usersDb = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
 
  res.json(usersDb)
})

//GET  http://api.agenda-de-aniversariantes/:id
//POST http://api.agenda-de-aniversariantes
//PUT GET http://api.agenda-de-aniversariantes/:id
//DELETE GET http://api.agenda-de-aniversariantes/:id
