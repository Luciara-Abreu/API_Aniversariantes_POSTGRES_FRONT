import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'
import admTokenRepository from 'src/repositories/AdmTokenRepository'
import EtherealMail from 'src/email/EtherealMail'
import path, { resolve } from 'path'

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

    const { token } = await admTokenRepository.generete(adm.id)

    //const forgotResetPassword = path.resolve(__dirname, '..', '..', 'views', 'forgot_password.hbs')
    const forgotResetPassword = resolve(`src/views/forgot_password.hbs`)

    await EtherealMail.sendMail({
      to: {
        name: adm.name,
        email: adm.email,
      },
      subject: '[API ANIVERSARIANTES] Recuperação de senha',
      templateData: {
        file: forgotResetPassword,
        variables: {
          name: adm.name,
          link: `${process.env.APP_WEB_URL}/reset?token=${token}`,
        },
      },
    })
  }
}

export default SendForgotPasswordEmailService
