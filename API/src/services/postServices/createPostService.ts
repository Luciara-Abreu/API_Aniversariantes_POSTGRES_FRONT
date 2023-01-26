import postRepository from '@modules/repositories/PostRepository'
import AppError from '@shared/errors/AppError'
import Post from 'src/entities/PostEntity'
import IPostType from 'src/interfaces/IPost'


class CreatePostService {
  public async execute({ title, content }: IPostType): Promise<Post> {
    const postExist = await postRepository.findOneBy({ title, content })
    if (postExist) {
      throw new AppError('Post alread exist with this data 🤪')
    }
    const salvePost = postRepository.create({
      title, content
    })

    await postRepository.save(salvePost)
    return salvePost
  }
}

export default CreatePostService
