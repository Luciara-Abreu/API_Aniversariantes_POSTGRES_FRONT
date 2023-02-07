import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import admTokenRepository from 'src/repositories/AdmTokenRepository'
import { isAfter, addHours } from 'date-fns'
import { hash } from 'bcryptjs'

interface IAdmType {
  token: string
  password: string
}
class ResetPasswordService {
  public async execute({ token, password }: IAdmType): Promise<void> {
    const admToken = await admTokenRepository.findByToken(token)
    if (!admToken) {
      throw new AppError('Adm Token does not found 👻')
    }

    const adm = await admRepository.findById(admToken.admID)
    if (!adm) {
      throw new AppError('Adm does not exist 👻')
    }

    const tokenCreatedAt = admToken.created_at
    const compareDate = addHours(tokenCreatedAt, 2)

    // Se data de agora está depois do compareDate??
    if (isAfter(Date.now(), compareDate)) {
      throw new AppError('Token expired')
    }
    //usar o rash do bcryptjs para criptografar a senha.
    adm.password = await hash(password, 8)
    await admRepository.save(adm)
  }
}

export default ResetPasswordService
