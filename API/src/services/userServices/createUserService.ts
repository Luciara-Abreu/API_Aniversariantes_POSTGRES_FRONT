import userRepository from 'src/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import User from 'src/entities/UserEntity'
import IUserType from 'src/interfaces/IUser'

class CreateUserService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone, avatar }: IUserType): Promise<User> {
    const emailExist = await userRepository.findByEmail(email)
    if (emailExist) {
      throw new AppError('Email adress alread used 🤪')
    }
    const nameExist = await userRepository.findByName(name)
    if (nameExist) {
      throw new AppError('User alread exist with this data 🤪')
    }
    const salveUser = userRepository.create({
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
