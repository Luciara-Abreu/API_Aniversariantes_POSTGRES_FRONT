import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'
import { compare } from 'bcryptjs'
import jwt, { Secret, sign } from 'jsonwebtoken'

interface IAuthType {
  email: string
  password: string
}

interface IResponse {
  adm: Adm
  token: string
}

class CreateAuthService {
  public async execute({ email, password }: IAuthType): Promise<IResponse> {
    const adm = await admRepository.findByEmail(email)
    const SECRET_KEY: Secret = '263c8651eb9b7183a3554008aaf05df0'

    if (!adm) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }

    const admConfirmed = await compare(password, adm.password)
    if (!admConfirmed) {
      throw new AppError('Incorrect email/password combination 🤪', 401)
    }
    const token = jwt.sign({ id: adm.id?.toString(), name: adm.name }, SECRET_KEY, {
      expiresIn: '1 days',
    })

    /* professor não deu certo mas eu consegui seguindo um pouco esse site
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

export default CreateAuthService
