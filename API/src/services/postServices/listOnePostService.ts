import postRepository from '@modules/repositories/PostRepository'
import AppError from '@shared/errors/AppError'
import Post from 'src/entities/PostEntity'

interface IRequest {
  id: number
}
class ListOnePostService {
  public async execute({ id }: IRequest): Promise<Post | null> {
    const post = await postRepository.findOneBy({ id })

    if (!post) {
      throw new AppError('post not found 👻')
    } else {
      console.log(post)
    }
    return post
  }
}

export default ListOnePostService
