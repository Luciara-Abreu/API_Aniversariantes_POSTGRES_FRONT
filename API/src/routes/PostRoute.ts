import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import PostController from 'src/controllers/PostController'
import isAuthenticated from 'src/middlewares/AuthMiddleware/isAuthenticated'

const RoutePost = express()
const postController = new PostController()

console.log('************* Rotas de Posts **********************')

RoutePost.get('/ListAllPosts', postController.listAllPosts)

RoutePost.get(
  '/ListOnePost/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  postController.listOnePost,
)

RoutePost.get(
  '/AniverAndPost/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  postController.listUserAndTheirPost,
)

RoutePost.post(
  '/AddPost',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.string().required(),
      userID: Joi.string().required(),
    },
  }),
  postController.createPost,
)

RoutePost.patch(
  '/UpdatePost/:id',
  isAuthenticated,
  celebrate({
    [Segments.BODY]: {
      title: Joi.string(),
      content: Joi.string(),
      userID: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  postController.updatePost,
)

RoutePost.delete(
  '/DeletePost/:id',
  isAuthenticated,
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  postController.deletePost,
)
console.log('')

export default RoutePost
