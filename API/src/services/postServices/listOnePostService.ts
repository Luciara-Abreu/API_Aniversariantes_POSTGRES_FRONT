import postRepository from 'src/repositories/PostRepository'
import AppError from '@shared/errors/AppError'
import Post from 'src/entities/PostEntity'

interface IRequest {
  id: string
}
class ListOnePostService {
  public async execute({ id }: IRequest): Promise<Post> {
    const post = await postRepository.findOneBy({ id })

    if (!post) {
      throw new AppError('Post not found 👻')
    } else {
      console.log(post)
    }
    return post
  }
}

export default ListOnePostService
