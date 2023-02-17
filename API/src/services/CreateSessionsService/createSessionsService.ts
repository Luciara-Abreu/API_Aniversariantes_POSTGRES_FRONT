import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'
import { compare } from 'bcryptjs'
import jwt, { sign } from 'jsonwebtoken'
import authConfig from '@config/auth'

interface IAuthType {
  email: string
  password: string
}

interface IResponse {
  adm: Adm
  token: string
}

class CreateSessionsService {
  public async execute({ email, password }: IAuthType): Promise<IResponse> {
    const adm = await admRepository.findByEmail(email)
    if (!adm) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }
    const passwordConfirmed = await compare(password, adm.password)
    if (!passwordConfirmed) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }
    console.log(password)
    const token = jwt.sign({ id: adm.id?.toString(), name: adm.name }, authConfig.jwt.secret, {
      expiresIn: authConfig.jwt.expiresIn,
    })

    /*
      const token = sign({}, authConfig.jwt.secret, {
      subject: adm.id,
      expiresIn: authConfig.jwt.expiresIn,
    })
    professor não deu certo mas eu consegui seguindo um pouco esse site
    https://dev.to/juliecherner/authentication-with-jwt-tokens-in-typescript-with-express-3gb1
     // abaixo jeito do profe. Não estou desmerecendo ninguém, mas estou me merecendo por ser
    alguém que não desiste.

    const token = sign({}, '263c8651eb9b7183a3554008aaf05df0', {
      subject: adm.id,
      expiresIn: '1d',
    })
    */

    return {
      adm,
      token,
    }
  }
}

export default CreateSessionsService
