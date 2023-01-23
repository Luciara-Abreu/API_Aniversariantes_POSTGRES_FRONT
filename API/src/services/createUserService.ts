import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import { User } from 'src/entities/UserEntity'

interface IUserType {
  name: string
  birthDate: Date
  sexualOrientation: string
  email: string
  lastEmail: string | undefined
  fone: number
}

class CreateUserService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone }: IUserType): Promise<User> {
    const userExist = await userRepository.findOneBy({ name, birthDate, sexualOrientation, email, lastEmail, fone })
    if (userExist) {
      throw new AppError('User alread exist')
    }
    const salveUser = await userRepository.create({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
    })

    await userRepository.save(salveUser)
    return salveUser
  }
}

export default CreateUserService
