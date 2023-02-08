import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import Adm from 'src/entities/AdmEntity'
import IAdmType from 'src/interfaces/IAdm'
import { compare, hash } from 'bcryptjs'


class UpdateUserService {
  public async execute({ id, name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password, old_password }: IAdmType): Promise<Adm | undefined> {
    const adm = await admRepository.findOneBy({ id })

    if (!adm) {
      throw new AppError('adm not found 👻')
    }

    const admUpdateEmail = await admRepository.findByEmail(email)

    if (admUpdateEmail && admUpdateEmail.id !== id) {
      throw new AppError('There is already onde user this email')
    }
    if (password && !old_password) {
      throw new AppError('Old password is required')
    }
    if(password && old_password){
      const checkOldPassword = await compare(old_password, adm.password)

      if(checkOldPassword){
        throw new AppError('Old password does not match')
      }
      adm.password = await hash(password, 8)
    }
      adm.name = name
      adm.birthDate = birthDate
      adm.sexualOrientation = sexualOrientation
      adm.email = email
      adm.lastEmail = lastEmail
      adm.fone = fone
      adm.avatar = avatar

      await admRepository.save(adm)
      console.log(`adm atualizado com sucesso!`)

    return adm
  }
}
export default UpdateUserService
