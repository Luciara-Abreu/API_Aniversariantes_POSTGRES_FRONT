import AppDataSource from 'src/data-source'
import { User } from '../entities/User'

export const UserRepository = AppDataSource.getRepository(User)
const user = new User()
user.name
user.birthDate
user.sexualOrientation
user.email
user.lastEmail
user.fone

UserRepository.save(user)
