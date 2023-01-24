import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import { User } from 'src/entities/UserEntity'

interface IRequest {
  id: string
}
class ListOneUserService {
  public async execute({ id }: IRequest): Promise<User | null> {
    const user = await userRepository.findOneBy({ id })

    if (!user) {
      throw new AppError('user not found 👻')
    } else {
      console.log(user)
    }
    return user
  }
}

export default ListOneUserService
