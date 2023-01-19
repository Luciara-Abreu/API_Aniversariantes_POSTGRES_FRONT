import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import { User } from 'src/entities/UserEntity'
import { IUserType } from 'src/interfaces/User'

class UpdateUserService {
  public async execute({ id, name, birthDate, sexualOrientation, email, lastEmail, fone }: IUserType): Promise<User> {
    const userRepo = userRepository
    const user = await userRepo.findOneBy({ id: Number(id) })
    if (!user) {
      throw new AppError('User not found', 400)
    }
    const userExist = await userRepo.findByName(name, birthDate)
    if (userExist && name !== user.name) {
      throw new AppError('There is user already exists with this data', 400)
    }
    user.name = name
    user.birthDate = birthDate
    user.sexualOrientation = sexualOrientation
    user.email = email
    user.lastEmail = lastEmail
    user.fone = fone

    await userRepo.save(user)
    return user
  }
}

export default UpdateUserService
