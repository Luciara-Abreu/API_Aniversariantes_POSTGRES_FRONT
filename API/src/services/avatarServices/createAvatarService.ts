import userRepository from 'src/repositories/UserRepository'
import AppError from '@shared/errors/AppError'
import Avatar from 'src/entities/avatarEmtity'
import avatarRepository from 'src/repositories/AvatarRepository'
interface IAvatarType {
  avatar: string
  userID: string
}
class CreateAvatarService {
  public async execute({ avatar, userID }: IAvatarType): Promise<Avatar> {
    const user = await userRepository.findOneBy({ id: userID })
    if (!user) {
      throw new AppError('User does not exist 🤪')
    }
    const newAvatar = avatarRepository.create({
      avatar,
      user,
    })

    await avatarRepository.save(newAvatar)
    return newAvatar
  }
}
export default CreateAvatarService
