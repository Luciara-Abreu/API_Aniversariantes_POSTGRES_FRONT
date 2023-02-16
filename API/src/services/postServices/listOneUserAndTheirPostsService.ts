import AppError from '@shared/errors/AppError'
import postRepository from 'src/repositories/PostRepository'
import userRepository from 'src/repositories/UserRepository'
import Post from 'src/entities/PostEntity'
import User from 'src/entities/UserEntity'

interface IRequest {
  id: string
  userID: string
}
interface IResponse {
  user: User
  listPosts: Post[]
}
class ListAllPostOftheAUserService {
  public async execute({ id, userID }: IRequest): Promise<IResponse> {
    const user = await userRepository.findById(id)
    if (!user) {
      throw new AppError('Opz!! User does not exist')
    }
    const listPosts = await postRepository.find({
      where: {
        userID: id,
      },
    })
    const showList = {
      user,
      listPosts,
    }

    return showList
  }
}

export default ListAllPostOftheAUserService
