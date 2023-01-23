import userRepository from '@modules/repositories/UserRepository'
import AppError from '@shared/errors/AppError'

interface IRequest {
  id: string
}
class DeleteUserService {
  public async execute({ id }: IRequest): Promise<void> {
    const user = await userRepository.findOneBy({ id })

    if (!user) {
      throw new AppError('user not found.');
    }
    await userRepository.remove(user);
  }
}

export default DeleteUserService
