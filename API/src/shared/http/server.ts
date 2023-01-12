import 'reflect-metadata'
import express from 'express'
import cors from 'cors'
import RouteUser from 'src/routes/UserRoute'
import RouteAdm from 'src/routes/AdmRoute'
import RoutePost from 'src/routes/PostRoute'

const app = express()
app.use(cors())
app.use(express.json())

app.listen(8081, () => {
  console.log(`Server started on port     🏆  8081 🏆 `)
  console.log('----------------------------------------')
})

app.use(RouteUser)
app.use(RouteAdm)
app.use(RoutePost)
