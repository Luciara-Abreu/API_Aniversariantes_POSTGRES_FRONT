import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import authConfig from '@config/auth'
import { request } from 'http'
/**
 *Esta funcão vai validar se o tokem que estamos recebendo é um tokem criado pela nossa aplicação.
Caso não seja, ele deve estourar um erro.
 */
interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}
function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new AppError('JWT Token is missing.')
  }
  const [, token] = authHeader.split(' ') // em que deixar o espaço kkk :).

  // aqui ele valida se o tokem foi criado com essa secret
  try {
    const decodeToken = verify(token, authConfig.jwt.Secret)
    //console.log('decodeToken Aqui ====> ', decodeToken)

    const { sub } = decodeToken as ITokenPayload
    //vamos sobreescrever o tipo request para add o adm
    req.adm = {
      id: sub,
      name: sub,
    }

    return next()
  } catch {
    throw new AppError('Invalid JWT Tokennnn.')
  }
}

export default isAuthenticated
