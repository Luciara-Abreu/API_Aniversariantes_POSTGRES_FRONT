import Post from 'src/entities/PostEntity'
import postRepository from 'src/repositories/PostRepository'

class ListAllPostService {
  public async execute(): Promise<Post[]> {
    const postRepo = postRepository
    const listPosts = await postRepo.find()
    return listPosts
  }
}

export default ListAllPostService
