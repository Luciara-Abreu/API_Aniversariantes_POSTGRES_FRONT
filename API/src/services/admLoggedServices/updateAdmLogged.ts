import admRepository from 'src/repositories/AdmRepository'
import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'
import { compare, hash } from 'bcryptjs'

interface IRequest {
  adm_id: string
  name: string
  email: string
  password?: string
  old_password?: string
}

class UpdateAdmLogged {
  public async execute({ adm_id, name, email, password, old_password }: IRequest): Promise<Adm> {
    const adm = await admRepository.findById(adm_id)

    const emailExist = await admRepository.findByEmail(email)
    if (emailExist && emailExist.email !== adm_id) {
      throw new AppError('There is already one user with this email.')
    }

    /*
    Se eu for atualizar apenas o nome e email, coloco apenas esses dois campos, mas se for
    atualizar a senha, tenho que colocar nome, email, a senha nova e a antiga e tbm a confirmação.
      "old_password": "123456",
      "password": "123456",
      "password_confirmation": "123456"
    */
    if (password && !old_password) {
      throw new AppError('Old password is required.')
    }

    if (password && old_password) {
      const checkOldPassword = await compare(old_password, adm!.password)

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.')
      }

      adm!.password = await hash(password, 8)
    }

    if (adm) {
      adm.name = name
      adm.email = email

      await admRepository.save(adm)
      console.log(`adm atualizado com sucesso!`, adm)
    } else {
      throw new AppError('adm not found 👻')
    }
    return adm
  }
}

export default UpdateAdmLogged
