import AppDataSource from 'src/data-source'
import User from 'src/entities/User'

const userRepository = AppDataSource.getRepository(User)
const user = new User()
user.name
user.birthDate
user.sexualOrientation
user.email
user.lastEmail
user.fone

userRepository.save(user)

export default userRepository
