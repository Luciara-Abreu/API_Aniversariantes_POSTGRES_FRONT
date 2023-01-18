import express from 'express'
import UserController from 'src/controllers/UserController'
const RouteUser = express()

console.log('')
console.log('----------------------------------------')

console.log('********** Rotas de User ***************')
RouteUser.post('/AddAniver', new UserController().createUser)
RouteUser.get('/Aniver/:id', new UserController().listOneAniver)
RouteUser.get('ListAllAnivers', new UserController().listAllAnivers)
RouteUser.patch('/UpdateAniver/:id', new UserController().updateAniver)
RouteUser.delete('/DeleteAniver/:id', new UserController().deleteAniver)

console.log('')

export default RouteUser
