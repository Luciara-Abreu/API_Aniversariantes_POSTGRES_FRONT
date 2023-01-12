import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from 'typeorm'
import express from 'express'

const app = express()
app.use(express.json())

const port = process.env.DB_PORT as number | undefined

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: port,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_DBNAME,
  entities: [`${__dirname}/**/entities/*.{ts, js}`],
  migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
})

AppDataSource.initialize()
  .then(() => {
    return app.listen(process.env.PORT, () => {
      console.log(`Connection initialized with database.  🏆 `, process.env.PORT, '🏆')
      console.log('')
      console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
    })
  })
  .catch(error => console.log(error))

export default AppDataSource

/**
 *
 * const getDataSource = (delay = 3000): Promise<DataSource> => {
  if (AppDataSource.isInitialized) return Promise.resolve(AppDataSource)

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (AppDataSource.isInitialized) resolve(AppDataSource)
      else reject('Failed to create connection with database')
    }, delay)
  })
}
 */
