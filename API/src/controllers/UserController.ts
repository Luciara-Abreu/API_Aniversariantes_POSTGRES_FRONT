import { ResolveOptions } from 'dns'
import { Request, Response } from 'express'
import CreateUserService from 'src/services/createUserService'
import DeleteUserService from 'src/services/deleteUserServer'
import ListAllUserService from 'src/services/listAllUserService'
import ListOneUserService from 'src/services/listOneUserService'
import UpdateUserService from 'src/services/UpdateUserService'
import userRepository from '../modules/repositories/UserRepository'

class UserController {
  public async createUser(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone } = req.body
    const addneWUser = new CreateUserService()
    const thisUser = await addneWUser.execute({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
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
    return res.json(showUsers)
  }

  async updateAniver(req: Request, res: Response): Promise<Response> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone } = req.body
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
