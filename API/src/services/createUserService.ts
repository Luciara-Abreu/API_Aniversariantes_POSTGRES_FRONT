import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import { User } from 'src/entities/UserEntity'
import { IUserType } from 'src/interfaces/User'

class CreateUserService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone }: IUserType): Promise<User> {
    const userRepo = userRepository
    const userExist = await userRepo.findByName(name, birthDate)
    if (userExist) {
      throw new AppError('There is user already exists with this data', 400)
    }
    const newUser = await userRepository.create({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
    })
    await userRepo.save(newUser)
    return newUser
  }
}

export default CreateUserService
