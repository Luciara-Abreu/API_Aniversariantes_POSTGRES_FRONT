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
  entities: [`src/entities/*.{ts,js}`],
  migrations: [`src/migrations/*.{ts,js}`],
  synchronize: true,
  logging: false,
})

AppDataSource.initialize()
  .then(() => {
    return app.listen(process.env.PORT, () => {
      console.log(`✨ 🏆 Connection initialized with database. 🏆 `, process.env.PORT, '🏆   ✨')
      console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')
      console.log('')
    })
  })
  .catch(error => console.log(error))

export default AppDataSource

//Só acho o caminho quando a data-source está fora do config então não posso usar
// dessa meneira descrita abaixo
// entities: [`${__dirname}/**/entities/*.{ts,js}`],
// migrations: [`${__dirname}/**/migrations/*.{ts,js}`],
