import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import AvatarController from 'src/controllers/AvatarController'
import isAuthenticated from 'src/middlewares/AuthMiddleware/isAuthenticated'
import uploadConfig from '@config/upload'
import multer from 'multer'

const RouteAvatar = express()
const avatarController = new AvatarController()
const upload = multer(uploadConfig)

console.log('************ Rotas de Avatar **********************')


RouteAvatar.patch('/avatar', isAuthenticated, upload.single('avatar'), avatarController.updateAvatar)

console.log('')

export default RouteAvatar
