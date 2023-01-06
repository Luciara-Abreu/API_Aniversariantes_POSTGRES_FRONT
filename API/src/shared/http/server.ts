import 'reflect-metadata'
import express, { NextFunction, Request, Response } from 'express'

import cors from 'cors'
import routes from './routes'
import AppError from '@shared/errors/AppError'
import { AppDataSource } from 'src/data-source'

const app = express()

app.use(cors())
app.use(express.json())

app.use(routes)

//middleware
app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      status: 'error',
      massage: error.message,
    })
  }
  return res.status(500).json({
    status: 'error',
    message: 'Internal server error',
  })
})
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
console.log('')
AppDataSource.initialize().then(() => {
  const app = express()

  app.use(express.json())
  app.get('/', (req, res) => {
    return res.json('DB inicializado com sucesso')
  })
  return app.listen(process.env.PORT, () => {
    console.log(`Data Base started on port  🏆 `, process.env.PORT, '🏆')
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
  })
})

/*app.listen(3333, () => {
  console.log(`Server started on port ✨✨✨ 3333 ✨✨✨ `)
  console.log('--------------------------------------------------------------')
})
*/
