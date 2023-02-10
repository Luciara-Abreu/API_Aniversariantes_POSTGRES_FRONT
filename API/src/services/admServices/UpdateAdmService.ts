import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import Adm from 'src/entities/AdmEntity'
import IAdmType from 'src/interfaces/IAdm'
import { compare, hash } from 'bcryptjs'

class UpdateAdmService {
  public async execute({ id, name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password }: IAdmType): Promise<Adm> {
    const adm = await admRepository.findOneBy({ id })

    console.log(adm)

    if (adm) {
      adm.name = name
      adm.birthDate = birthDate
      adm.sexualOrientation = sexualOrientation
      adm.email = email
      adm.lastEmail = lastEmail
      adm.fone = fone
      adm.avatar = avatar
      adm.password = password

      await admRepository.save(adm)
      console.log(`adm atualizado com sucesso!`)
    } else {
      throw new AppError('adm not found 👻')
    }

    return adm
  }
}
export default UpdateAdmService
