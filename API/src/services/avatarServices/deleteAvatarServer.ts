import AppError from '@shared/errors/AppError'
import avatarRepository from 'src/repositories/AvatarRepository'

interface IRequest {
  id: string
}
class DeleteAvatarService {
  public async execute({ id }: IRequest): Promise<void> {
    const avatar = await avatarRepository.findOneBy({ id })
    if (avatar) {
      await avatarRepository.remove(avatar)
      console.log(`Avatar ${avatar} deletado com sucesso!`)
    } else {
      throw new AppError('Avatar not found 👻')
    }
  }
}

export default DeleteAvatarService
