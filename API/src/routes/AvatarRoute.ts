import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import AvatarController from 'src/controllers/AvatarController'
import isAuthenticated from 'src/middlewares/AuthMiddleware/isAuthenticated'

const RouteAvatar = express()
const avatarController = new AvatarController()

console.log('************* Rotas de Avatar *********************')


RouteAvatar.post(
  '/AddAvatar',
  celebrate({
    [Segments.BODY]: {
      avatar: Joi.string(),
      userID: Joi.string(),
    },
  }),
  avatarController.createAvatar,
)

RouteAvatar.patch(
  '/UpdateAvatar/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      avatar: Joi.string(),
      userID: Joi.string(),
    },
    [Segments.PARAMS]: {
      id: Joi.string(),
    },
  }),
  avatarController.updateAvatar,
)

RouteAvatar.delete(
  '/DeleteAvatar/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  avatarController.deleteAvatar,
)
console.log('')

export default RouteAvatar
