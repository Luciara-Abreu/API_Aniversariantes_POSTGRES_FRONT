import express from 'express'
import { UserController } from 'src/controllers/UserController'
const route = express()

console.log('********** Rotas de User ***************')
route.post('/AddAniver', new UserController().createUser)
route.get('/Aniver/:id', new UserController().listOneAniver)
route.get('ListAniver', new UserController().listAllAniver)
route.patch('/UpdateAniver/:id', new UserController().updateAniver)
route.delete('/DeleteAniver/:id', new UserController().deleteAniver)
console.log('')
console.log('----------------------------------------')
export default route
