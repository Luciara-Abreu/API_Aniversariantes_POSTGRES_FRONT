import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import AuthController from 'src/controllers/AuthController'

const RouteAuth = express()
const authController = new AuthController()

console.log('************* Rota de Auth ************************')

RouteAuth.post(
  '/AuthAdm',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email(),
      password: Joi.string(),
    },
  }),
  authController.createAdm,
)
console.log('')

export default RouteAuth
