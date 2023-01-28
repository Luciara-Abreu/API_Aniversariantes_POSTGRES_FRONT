import { celebrate, Joi, Segments } from 'celebrate'
import express from 'express'
import PostController from 'src/controllers/PostController'

const RoutePost = express()
const postController = new PostController()

console.log('********** Rotas de Posts **************')
RoutePost.get('/ListAllPosts', postController.listAllPosts)
RoutePost.patch('/UpdatePost/:id', postController.updatePost)
RoutePost.get('/ListOnePost/:id', postController.listOnePost)
RoutePost.post('/AddPost', postController.createPost)
RoutePost.delete('/DeletePost/:id', postController.deletePost)
console.log('')

export default RoutePost
