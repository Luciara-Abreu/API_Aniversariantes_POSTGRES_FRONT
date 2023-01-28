import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import PostController from 'src/controllers/PostController'

const RoutePost = express()
const postController = new PostController()

console.log('********** Rotas de Posts **************')
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

RoutePost.post(
  '/AddPost',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.date().required(),
      userID: Joi.string().required(),
    },
  }),
  postController.createPost,
)

RoutePost.patch(
  '/UpdatePost/:id',
  celebrate({
    [Segments.BODY]: {
      title: Joi.string().required(),
      content: Joi.date().required(),
      userID: Joi.string().required(),
    },
    [Segments.PARAMS]: {
      id: Joi.string().uuid().required(),
    },
  }),
  postController.updatePost,
)

RoutePost.delete(
  '/DeletePost/:id',
  celebrate({
    [Segments.PARAMS]: {
      id: Joi.string().required(),
    },
  }),
  postController.deletePost,
)
console.log('')

export default RoutePost
