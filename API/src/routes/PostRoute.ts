import express from 'express'
import PostController from 'src/controllers/PostController'

const RoutePost = express()

console.log('********** Rotas de Posts **************')
RoutePost.post('/AddPost', new PostController().createPost)
RoutePost.get('/ListOnePost/:id', new PostController().listOnePost)
RoutePost.get('ListPostss', new PostController().listAllPosts)
RoutePost.patch('/UpdatePost/:id', new PostController().updatePost)
RoutePost.delete('/DeletePost/:id', new PostController().deletePost)
console.log('')

export default RoutePost
