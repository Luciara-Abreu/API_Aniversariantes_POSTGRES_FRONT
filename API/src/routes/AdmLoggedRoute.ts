import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import AdmLoggedController from 'src/controllers/AdmLoggedController'
import isAuthenticated from 'src/middlewares/AuthMiddleware/isAuthenticated'

const RouteAdmLogged = express()
const admLoggedController = new AdmLoggedController()

console.log('************* Rotas de AdmLogged ******************')
console.log('')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

RouteAdmLogged.get(
  '/Show/',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string(),
    },
  }),
  admLoggedController.showAdmLogged,
)

RouteAdmLogged.put(
  '/UpdateAdmLogged/',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string().optional(),
      password_confirmation: Joi.string().valid(Joi.ref('password')).when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      }),
    },
  }),

  admLoggedController.updateLogged,
)
console.log('')
export default RouteAdmLogged
