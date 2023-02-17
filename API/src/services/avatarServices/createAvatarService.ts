import AppError from '@shared/errors/AppError'
import Avatar from 'src/entities/avatarEmtity'
import avatarRepository from 'src/repositories/AvatarRepository'
import AdmRepository from 'src/repositories/AdmRepository'
interface IAvatarType {
  avatar: string
  admID: string
}
class CreateAvatarService {
  public async execute({ avatar, admID }: IAvatarType): Promise<Avatar> {
    //const adm = await AdmRepository.findById(id)
    const adm = await AdmRepository.findOneBy({ id: admID })
    if (!adm) {
      throw new AppError('Adm does not exist 🤪')
    }
    const newAvatar = avatarRepository.create({
      avatar,
      adm,
    })

    await avatarRepository.save(newAvatar)
    return newAvatar
  }
}
export default CreateAvatarService
