import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'
import authconfig from '@config/auth'
/**
 *Esta funcão vai validar se o tokem que estamos recebendo é um tokem criado pela nossa aplicação.
Caso não seja, ele deve estourar um erro.
 */

function isAuthenticated(req: Request, res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization
  if (!authHeader) {
    throw new AppError('JWT Token is missing.')
  }

  const [, token] = authHeader.split('')

  // aqui ele valida se o tokem foi criado com essa secret
  try {
    const decodeToken = verify(token, authconfig.jwt.Secret)

    return next()
  } catch {
    throw new AppError('Invalid JWT Token.')
  }
}

export default isAuthenticated
