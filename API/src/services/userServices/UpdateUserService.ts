import userRepository from 'src/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import User from 'src/entities/UserEntity'
import IUserType from 'src/interfaces/IUser'

class UpdateUserService {
  public async execute({ id, name, birthDate, sexualOrientation, email, lastEmail, fone }: IUserType): Promise<User | undefined> {
    const user = await userRepository.findOneBy({ id })

    if (user) {
      user.name = name
      user.birthDate = birthDate
      user.sexualOrientation = sexualOrientation
      user.email = email
      user.lastEmail = lastEmail
      user.fone = fone

      await userRepository.save(user)
      console.log(`User atualizado com sucesso!`)
    } else {
      throw new AppError('user not found 👻')
    }

    return user
  }
}

export default UpdateUserService

/**
 *   const userExists = await userRepository.findByName(name)
    if (userExists) {
      throw new AppError('There is already one User with this name.')
    }
 */
