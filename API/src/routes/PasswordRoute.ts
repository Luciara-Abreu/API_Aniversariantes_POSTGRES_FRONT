import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import ForgotPasswordController from 'src/controllers/ForgotPasswordController'

const RoutePassword = express()
const forgotPasswordController = new ForgotPasswordController()

console.log('********** Rota de RoutePassword ***************')

RoutePassword.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email(),
    },
  }),
  forgotPasswordController.create,
)
console.log('')

export default RoutePassword
