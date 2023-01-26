import userRepository from '@modules/repositories/UserRepository'
import { Request, Response } from 'express'
import CreatePostService from 'src/services/postServices/createPostService'
import DeletePostService from 'src/services/postServices/deletePostServer'
import ListAllPostService from 'src/services/postServices/listAllPostService'
import ListOnePostService from 'src/services/postServices/listOnePostService'
import UpdatePostService from 'src/services/postServices/UpdatePostService'

class PostController {
  async createPost(req: Request, res: Response): Promise<Response> {
    const { title, content } = req.body
    const { idUser } = req.params
    const addNewPost = new CreatePostService()
    try {
      const user = await userRepository.findOneBy({ id: idUser })
      if (!user) {
        return res.status(404).json({ message: 'Usuário não existe' })
      }
      const newPost = addNewPost.execute({
        title,
        content,
      })
      return res.status(201).json(newPost)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async listOnePost(req: Request, res: Response) {
    const { id } = req.params

    const showPost = new ListOnePostService()
    const listPost = await showPost.execute({ id })
    return res.json(listPost)
  }

  async listAllPosts(req: Request, res: Response) {
    const listposts = new ListAllPostService()
    const showPosts = await listposts.execute()
    return res.json(showPosts)
  }

  async updatePost(req: Request, res: Response) {
    const { id } = req.params
    const { title, content } = req.body

    const postForUpdate = new UpdatePostService()
    const thisPost = await postForUpdate.execute({
      id,
      title,
      content,
    })
    return res.json(thisPost)
  }

  async deletePost(req: Request, res: Response) {
    const { id } = req.params

    const thisPost = new DeletePostService()
    await thisPost.execute({ id })
    return res.json([])
  }
}

export default PostController
