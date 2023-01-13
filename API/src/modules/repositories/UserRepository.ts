import AppDataSource from 'src/data-source'
import { User } from 'src/entities/UserEntity'

const userRepository = AppDataSource.getRepository(User)

export default userRepository
