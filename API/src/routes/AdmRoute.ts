import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import AdmController from 'src/controllers/AdmController'
import isAuthenticated from 'src/middlewares/AuthMiddleware/isAuthenticated'

const RouteAdm = express()
const admController = new AdmController()

console.log('************* Rotas de Adms ***********************')

RouteAdm.get('/ListAllAdm', isAuthenticated, admController.listAllAdm)

RouteAdm.post(
  '/AddAdm',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthDate: Joi.date().required(),
      sexualOrientation: Joi.string().required(),
      email: Joi.string().email().required(),
      lastEmail: Joi.string().required(),
      fone: Joi.string().required(),
      avatar: Joi.string(),
      password: Joi.string().required(),
    },
  }),
  admController.createAdm,
)

RouteAdm.get(
  '/listOneAdm/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  admController.listOneAdm,
)

RouteAdm.patch(
  '/UpdateAdm/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      name: Joi.string(),
      birthDate: Joi.date(),
      sexualOrientation: Joi.string(),
      email: Joi.string(),
      lastEmail: Joi.string(),
      fone: Joi.string(),
      avatar: Joi.string(),
      password: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  admController.updateAdm,
)

RouteAdm.delete(
  '/DeleteAdm/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  admController.deleteAdm,
)

console.log('')

export default RouteAdm
