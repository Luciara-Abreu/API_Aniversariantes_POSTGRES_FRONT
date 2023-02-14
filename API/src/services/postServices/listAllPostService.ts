import Post from 'src/entities/PostEntity'
import postRepository from 'src/repositories/PostRepository'

class ListAllPostService {
  public async execute(): Promise<Post[]> {
    //const listPosts = await postRepo.find()
    const listPosts = await postRepository.createQueryBuilder('post').take(10).getMany()
    return listPosts
  }
}

export default ListAllPostService
