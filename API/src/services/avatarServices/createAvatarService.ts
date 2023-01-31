import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'
import IAvatarType from 'src/interfaces/IAvatar'
import path from 'path'
import uploadConfig from '@config/upload'
import fs from 'fs'

class UpdateAvatarService {
  public async execute({ id, avatarFilename }: IAvatarType): Promise<Adm> {
    const adm = await admRepository.findOneBy({ id })
    if (!adm) {
      throw new AppError('Adm not found')
    }
    if (adm.avatar) {
      const admAvatarFilePath = path.join(uploadConfig.directory, adm.avatar)
      const admAvatarExist = await fs.promises.stat(admAvatarFilePath)

      if (admAvatarExist) {
        await fs.promises.unlink(admAvatarFilePath)
      }
    }
    adm.avatar = avatarFilename
    await admRepository.save(adm)
    return adm
  }
}

export default UpdateAvatarService
