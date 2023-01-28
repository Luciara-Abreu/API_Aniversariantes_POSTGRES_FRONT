import userRepository from 'src/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import Post from 'src/entities/PostEntity'
import IPostType from 'src/interfaces/IPost'
import postRepository from 'src/repositories/PostRepository'

class CreateUserService {
  public async execute({ title, content, userID }: IPostType): Promise<Post> {
    const user = await userRepository.findOneBy({ id: userID })
    //const postExist = await postRepository.findOneBy({ title, content })
    if (!user) {
      throw new AppError('User does not exist 🤪')
    } /*else if (postExist && user) {
      throw new AppError('Post alred exist 🤪')
    }*/
    const salvePost = postRepository.create({
      title,
      content,
      user,
    })

    await postRepository.save(salvePost)
    return salvePost
  }
}
export default CreateUserService
