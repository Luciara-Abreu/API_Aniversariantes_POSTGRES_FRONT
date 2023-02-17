import AppError from '@shared/errors/AppError'
import Avatar from 'src/entities/avatarEmtity'
import avatarRepository from 'src/repositories/AvatarRepository'

interface IAvatarType {
  avatar: string
  admID: string
}
class UpdateAvatarService {
  public async execute({ admID, avatar }: IAvatarType): Promise<Avatar> {
    const thisAvatar = await avatarRepository.findOneBy({ id: admID })

    if (thisAvatar) {
      thisAvatar.avatar = avatar

      await avatarRepository.save(thisAvatar)
      console.log(`Avatar atualizado com sucesso! 👍🏻`)
    } else {
      throw new AppError('Avatar not found 👻')
    }

    return thisAvatar
  }
}
export default UpdateAvatarService
