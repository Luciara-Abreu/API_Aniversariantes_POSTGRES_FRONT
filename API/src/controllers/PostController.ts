import postRepository from '@modules/repositories/PostRepository'
import { Request, Response } from 'express'
import Post from 'src/entities/PostEntity'



class PostController {
  async createPost(req: Request, res: Response): Promise<Post> {
    const { title, content } = req.body
    const newPost = postRepository.create()
    await postRepository.save(newPost)
    return newPost
  }

  async listOnePost(req: Request, res: Response) {
    const { id } = req.params

    try {
      const post = await postRepository.findOneBy({ id: Number(id) })

      if (!post) {
        return res.status(404).json({ message: 'Aniversariante não existe' })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async listAllPosts(req: Request, res: Response) {
    try {
      const posts = await postRepository.find()
      return res.json(posts)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async updatePost(req: Request, res: Response) {
    const { id } = req.params

    return await postRepository.update(
      { id: Number(id) },
      {
        title: req.body.title,
        content: req.body.content,
      },
    )
  }

  async deletePost(req: Request, res: Response) {
    const { id } = req.params
    await postRepository.delete({ id: Number(id) })
  }
}

export default PostController
