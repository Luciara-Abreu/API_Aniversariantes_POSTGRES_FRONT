import { Request, Response } from 'express'
import CreatePostService from 'src/services/postServices/createPostService'
import DeletePostService from 'src/services/postServices/deletePostServer'
import ListAllPostService from 'src/services/postServices/listAllPostService'
import ListOnePostService from 'src/services/postServices/listOnePostService'
import ListAllPostOftheAUserService from 'src/services/postServices/listOneUserAndTheirPostsService'
import UpdatePostService from 'src/services/postServices/UpdatePostService'

class PostController {
  async createPost(req: Request, res: Response) {
    const { title, content, userID } = req.body

    const addNewPost = new CreatePostService()
    const thisPost = await addNewPost.execute({
      title,
      content,
      userID,
    })
    return res.json(thisPost)
  }

  public async listOnePost(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showPost = new ListOnePostService()
    const thisPost = await showPost.execute({ id })
    return res.json(thisPost)
  }
//('**************************** Minha criação solita ****************************')
  public async listUserAndTheirPost(req: Request, res: Response) {
    const { id } = req.params
    const { userID } = req.body
    const showUser = new ListAllPostOftheAUserService()
    const thisUser = await showUser.execute({
      id,
      userID,
    })
    //console.log('List All post of controller = > ', thisUser)
//('**************************** Minha criação solita ****************************')
    return res.json(thisUser)
  }

  async listAllPosts(req: Request, res: Response) {
    const listPosts = new ListAllPostService()
    const showPosts = await listPosts.execute()
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
