import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import admTokenRepository from 'src/repositories/AdmTokenRepository'


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
    console.log(token)
  }
}

export default ResetPasswordService
