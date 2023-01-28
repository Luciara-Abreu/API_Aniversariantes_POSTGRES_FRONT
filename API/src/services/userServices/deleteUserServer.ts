import userRepository from 'src/repositories/UserRepository'
import AppError from '@shared/errors/AppError'

interface IRequest {
  id: string
}
class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const user = await userRepository.findOneBy({ id })
    if (user) {
      await userRepository.remove(user)
      console.log(`User ${user.name} do ${user.id}, deletado com sucesso!`)
    } else {
      throw new AppError('user not found 👻')
    }
  }
}

export default DeleteUserService
