import { Request, Response } from 'express'
import CreateUserService from 'src/services/userServices/createUserService'
import DeleteUserService from 'src/services/userServices/deleteUserServer'
import ListAllUserService from 'src/services/userServices/listAllUserService'
import ListOneUserService from 'src/services/userServices/listOneUserService'
import UpdateUserService from 'src/services/userServices/UpdateUserService'

class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone, avatar } = req.body
    const addneWUser = new CreateUserService()
    const thisUser = await addneWUser.execute({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
    })
    return res.json(thisUser)
  }

  public async listOneAniver(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const showUser = new ListOneUserService()
    const thisUser = await showUser.execute({ id })
    return res.json(thisUser)
  }

  async listAllAnivers(req: Request, res: Response) {
    const listUsers = new ListAllUserService()
    const showUsers = await listUsers.execute()
    console.log('Quem solicitou a lista de usuários na requisição????====> ', req.adm)
    return res.json(showUsers)
  }

  async updateAniver(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone, avatar } = req.body
    const { id } = req.params

    const userForUpdate = new UpdateUserService()
    const thisUser = await userForUpdate.execute({
      id,
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
    })
    return res.json(thisUser)
  }

  public async deleteAniver(request: Request, response: Response): Promise<Response> {
    const { id } = request.params

    const deleteUSer = new DeleteUserService()
    await deleteUSer.execute({ id })
    return response.json([])
  }
}
export default UserController
