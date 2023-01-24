import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import { errors } from 'celebrate'
import cors from 'cors'
import RouteUser from 'src/routes/UserRoute'
import RouteAdm from 'src/routes/AdmRoute'
import RoutePost from 'src/routes/PostRoute'
import AppError from '@shared/errors/AppError'

const app = express()
app.use(cors())
app.use(express.json())
app.use(errors())

app.use(RouteUser)
app.use(RouteAdm)
app.use(RoutePost)

//middleware
app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    })
  }
  console.log(error)
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error 😭',
  })
})

app.listen(8081, () => {
  console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
  console.log(`Server started on port ............... 🏆  8081 🏆 `)
  console.log('---------------------------------------------------')
})
