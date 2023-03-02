import AppError from '@shared/errors/AppError'
import AppDataSource from 'src/config/data-source'
import Post from 'src/entities/PostEntity'

const postRepository = AppDataSource.getRepository(Post).extend({
  async findById(userID: string): Promise<Post> {
    const list = await this.findOneBy({
      userID,
    })
    if (!list) {
      throw new AppError('Repository-> Dont exist post for user')
    }
    return list
  },
})

export default postRepository
