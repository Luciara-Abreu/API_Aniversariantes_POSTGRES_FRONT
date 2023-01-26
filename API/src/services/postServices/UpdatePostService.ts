import postRepository from '@modules/repositories/PostRepository'
import AppError from '@shared/errors/AppError'
import Post from 'src/entities/PostEntity'
import IPostType from 'src/interfaces/IPost'

class UpdatePostService {
  public async execute({ id, title, content }: IPostType): Promise<Post | null> {
    const post = await postRepository.findOneBy({ id })

    if (post) {
      post.title = title
      post.content = content

      await postRepository.save(post)
      console.log(`Post atualizado com sucesso!`)
    } else {
      throw new AppError('Post not found 👻')
    }

    return post
  }
}
export default UpdatePostService
