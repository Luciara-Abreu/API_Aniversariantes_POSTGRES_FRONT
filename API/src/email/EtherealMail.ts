// Use at least Nodemailer v4.1.0
import nodemailer from 'nodemailer'

interface ISendMail {
  to: string
  body: string
}

class EtherealEmail {
  static async sendEmail({ to, body }: ISendMail): Promise<void> {
    const account = await nodemailer.createTestAccount()
    const transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    })
    const message = await transporter.sendMail({
      from: 'testeu@gmail.com',
      to: 'luciara.abreu@gmail.com',
      subject: 'Recuperação de senha',
      text: body,
    })
    console.log('Message sent: %s', message.messageId)
    console.log('Message sent: %s', nodemailer.getTestMessageUrl(message))
  }
}
export default EtherealEmail
