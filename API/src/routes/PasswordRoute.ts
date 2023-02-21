import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import ForgotPasswordController from 'src/controllers/ForgotPasswordController'
import ResetPasswordController from 'src/controllers/ResetPasswordController'

const RoutePassword = express()
const forgotPasswordController = new ForgotPasswordController()
const resetPasswordController = new ResetPasswordController()

console.log('********************** Rota de RoutePassword ***************')

RoutePassword.post(
  '/forgot',
  celebrate({
    [Segments.BODY]: {
      email: Joi.string().email(),
    },
  }),
  forgotPasswordController.create,
)
RoutePassword.post(
  '/reset',
  celebrate({
    [Segments.BODY]: {
      token: Joi.string().uuid().required(),
      password: Joi.string().required(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  resetPasswordController.create,
)

console.log('')
export default RoutePassword
