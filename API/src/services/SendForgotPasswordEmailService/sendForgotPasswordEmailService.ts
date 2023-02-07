import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import admTokenRepository from 'src/repositories/AdmTokenRepository'

interface IAdmType {
  email: string
}
class SendForgotPasswordEmailService {
  public async execute({ email }: IAdmType): Promise<void> {
    const adm = await admRepository.findByEmail(email)
    if (!adm) {
      throw new AppError('Adm does not found 👻')
    }
    const salveAdm = admRepository.create({
      email,
    })

    const token = await admTokenRepository.generete(adm.id)
    console.log(token)
  }
}

export default SendForgotPasswordEmailService
