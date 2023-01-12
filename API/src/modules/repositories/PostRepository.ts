import AppDataSource from 'src/data-source'
import Post from 'src/entities/Post'


const postRepository = AppDataSource.getRepository(Post)

const post = new Post()
post.title
post.content

postRepository.save(post)

export default postRepository
