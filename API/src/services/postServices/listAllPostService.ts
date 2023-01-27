import postRepository from 'src/repositories/PostRepository'
import Post from 'src/entities/PostEntity'

class ListAllPostService {
  public async execute(): Promise<Post[]> {
    const postRepo = postRepository
    const post = await postRepo.find()
    return post
  }
}

export default ListAllPostService
