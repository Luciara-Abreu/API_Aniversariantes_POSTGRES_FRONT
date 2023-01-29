import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import AdmController from 'src/controllers/AdmController'

const RouteAdm = express()

console.log('********** Rotas de Adms ***************')
RouteAdm.get('/ListAllAdm', new AdmController().listAllAdm)

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
      password: Joi.string(),
    },
  }),
  new AdmController().createAdm,
)

RouteAdm.get(
  '/listOneAdm/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  new AdmController().listOneAdm,
)

RouteAdm.patch(
  '/UpdateAdm/:id',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      birthDate: Joi.date().required(),
      sexualOrientation: Joi.string().required(),
      email: Joi.string().required(),
      lastEmail: Joi.string().required(),
      fone: Joi.string().required(),
      avatar: Joi.string(),
      password: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  new AdmController().updateAdm,
)

RouteAdm.delete(
  '/DeleteAdm/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  new AdmController().deleteAdm,
)

console.log('')

export default RouteAdm
