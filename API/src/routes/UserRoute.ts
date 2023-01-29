import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import UserController from 'src/controllers/UserController'

const RouteUser = express()
const userController = new UserController()

console.log('')
console.log('----------------------------------------')

console.log('********** Rotas de User ***************')
RouteUser.get('/ListAllAnivers', userController.listAllAnivers)

RouteUser.post(
  '/AddAniver',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthDate: Joi.date().required(),
      sexualOrientation: Joi.string().required(),
      email: Joi.string().email().required(),
      lastEmail: Joi.string().required(),
      fone: Joi.string().required(),
      avatar: Joi.string(),
    },
  }),
  userController.createUser,
)

RouteUser.get(
  '/Aniver/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.listOneAniver,
)

RouteUser.patch(
  '/UpdateAniver/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthDate: Joi.date().required(),
      sexualOrientation: Joi.string().required(),
      email: Joi.string().required(),
      lastEmail: Joi.string().required(),
      fone: Joi.string().required(),
      avatar: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  userController.updateAniver,
)

RouteUser.delete(
  '/DeleteAniver/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  userController.deleteAniver,
)

console.log('')

export default RouteUser
