import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import admTokenRepository from 'src/repositories/AdmTokenRepository'
import EtherealEmail from 'src/email/EtherealMail'

interface IAdmType {
  email: string
}
/**
 * Classe para recuperação de senha.
 * Esqueci a senha. Envio da recuperação por e-mail.
 */
class SendForgotPasswordEmailService {
  public async execute({ email }: IAdmType): Promise<void> {
    const adm = await admRepository.findByEmail(email)
    if (!adm) {
      throw new AppError('Adm does not found 👻')
    }
    const salveAdm = admRepository.create({
      email,
    })

    const { token } = await admTokenRepository.generete(adm.id)
    //console.log(token)
    await EtherealEmail.sendEmail({
      to: {
        name: adm.name,
        email: adm.email,
      },
      subject: '[API ANIVERSARIANTES] Recuperação de senha',
      templateData: {
        file: `Olá {{name}}, Para redefinir sua senha use esse código => {{token}}`,
        variables: {
          name: adm.name,
          token: token,
        },
      },
    })
  }
}

export default SendForgotPasswordEmailService
