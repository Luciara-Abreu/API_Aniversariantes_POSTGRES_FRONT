import { User } from '../../modules/entities/User'
import { AppDataSource } from 'src/data-source'

const dataSource = AppDataSource

export const UserRepository = dataSource.getRepository(User)
const user = new User()
user.name
user.birthDate
user.sexualOrientation
user.email
user.lastEmail
user.fone

UserRepository.save(user)
