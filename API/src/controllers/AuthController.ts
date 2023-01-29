import { Request, Response } from 'express'
import CreateAuthService from 'src/services/authServices/createAuthService'

class AuthController {
  public async createAdm(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const authAdm = new CreateAuthService()
    const thisAdm = await authAdm.execute({
      email,
      password,
    })
    return res.json(thisAdm)
  }
}
export default AuthController
