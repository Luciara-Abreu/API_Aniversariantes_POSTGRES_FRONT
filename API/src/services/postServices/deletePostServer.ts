import postRepository from 'src/repositories/PostRepository'
import AppError from '@shared/errors/AppError'

interface IRequest {
  id: string
}
class DeletePostService {
  public async execute({ id }: IRequest): Promise<void> {
    const post = await postRepository.findOneBy({ id })
    if (post) {
      await postRepository.remove(post)
      console.log(`post ${post.title} deletado com sucesso!`)
    } else {
      throw new AppError('post not found 👻')
    }
  }
}

export default DeletePostService
