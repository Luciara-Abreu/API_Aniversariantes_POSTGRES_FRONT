import express from 'express'
import UserController from 'src/controllers/UserController'

const RouteUser = express()
const userController = new UserController()

//antes de instaciar o Usercontroller usava assim
//RouteUser.post('/AddAniver', new UserController().createUser)

console.log('')
console.log('----------------------------------------')

console.log('********** Rotas de User ***************')
RouteUser.post('/AddAniver', userController.createUser)
RouteUser.get('/Aniver/:id', userController.listOneAniver)
RouteUser.get('/ListAllAnivers', userController.listAllAnivers)
RouteUser.patch('/UpdateAniver/:id', userController.updateAniver)
RouteUser.delete('/DeleteAniver/:id', userController.deleteAniver)

console.log('')

export default RouteUser
