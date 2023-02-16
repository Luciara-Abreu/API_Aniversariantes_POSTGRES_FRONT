import AppError from '@shared/errors/AppError'
import postRepository from 'src/repositories/PostRepository'
import Post from 'src/entities/PostEntity'
import userRepository from 'src/repositories/UserRepository'

interface IRequest {
  id: string
  userID: string
}
/*class ListOneUserAndTheirPostService {
  public async execute({ id }: IRequest): Promise<Post> {
    const posts = await postRepository.findByUserID(id)
    if (!posts) {
      throw new AppError('Dont exist post')
    }
    return posts
  }
}
*/
class ListAllPostOftheAUserService {
  public async execute({ id }: IRequest): Promise<Post[]> {
    const listPosts = await postRepository.find({
      where: {
        userID: id,
      },
    })
    return listPosts
  }
}

export default ListAllPostOftheAUserService
