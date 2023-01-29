import AppError from '@shared/errors/AppError'
import IAdmType from 'src/interfaces/IAdm'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'
import { compare, hash } from 'bcryptjs'

interface IAuthType {
  email: string
  password: string
}
/*
interface IResponse {
  user: Adm
}
*/
class CreateAuthService {
  public async execute({ email, password }: IAuthType): Promise<Adm> {
    const adm = await admRepository.findByEmail(email)

    if (!adm) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }

    const passwordConfirmed = await compare(password, adm.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }
    return adm
  }
}

export default CreateAuthService
