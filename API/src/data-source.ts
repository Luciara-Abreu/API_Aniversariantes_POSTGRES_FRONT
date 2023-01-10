import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import express from 'express'
const app = express()
app.use(express.json())

const port = process.env.DB_PORT as number | undefined

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBNAME,
  entities: [__dirname + '/../**/*.entities.{js,ts}'],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})

const appDataSource = AppDataSource.initialize().then(() => {
  app.use(express.json())

  return app.listen(process.env.PORT, () => {
    console.log(`Data Base started on port  🏆 `, process.env.PORT, '🏆')
    console.log('')
    console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
  })
})

export default appDataSource
