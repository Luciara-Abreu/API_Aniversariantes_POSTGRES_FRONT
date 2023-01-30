import AppDataSource from 'src/config/data-source'
import Post from 'src/entities/PostEntity'


const postRepository = AppDataSource.getRepository(Post)


export default postRepository
