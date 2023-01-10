import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import UserRoute from 'src/routes/UserRoute'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(8081, () => {
  console.log(`Server started on port     🏆  8081 🏆 `)
  console.log('----------------------------------------')
})

app.use(UserRoute)
