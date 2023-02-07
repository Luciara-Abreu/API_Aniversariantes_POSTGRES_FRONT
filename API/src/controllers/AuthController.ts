import { Request, Response } from 'express'
import CreateSessionsService from 'src/services/CreateSessionsService/createSessionsService'

class AuthController {
  public async createAdm(req: Request, res: Response): Promise<Response> {
    const { email, password } = req.body
    const authAdm = new CreateSessionsService()
    const thisAdm = await authAdm.execute({
      email,
      password,
    })
    return res.json(thisAdm)
  }
}
export default AuthController
