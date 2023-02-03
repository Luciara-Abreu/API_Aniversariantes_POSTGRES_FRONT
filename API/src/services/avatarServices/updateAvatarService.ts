import AppError from '@shared/errors/AppError'
import Avatar from 'src/entities/avatarEmtity'
import avatarRepository from 'src/repositories/AvatarRepository'

interface IAvatarType {
  avatar: string
  id: string
}
class UpdateAvatarService {
  public async execute({ id, avatar }: IAvatarType): Promise<Avatar> {
    const thisAvatar = await avatarRepository.findOneBy({ id })

    if (thisAvatar) {
      thisAvatar.avatar = avatar

      await avatarRepository.save(thisAvatar)
      console.log(`Avatar atualizado com sucesso! ${thisAvatar}`)
    } else {
      throw new AppError('Avatar not found 👻')
    }

    return thisAvatar
  }
}
export default UpdateAvatarService
