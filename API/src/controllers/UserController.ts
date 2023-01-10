import { User } from '../modules/entities/User'
import { UserRepository } from '../modules/repositories/UserRepository'
import { Request, Response } from 'express'

export class UserController {
  async createUser(req: Request, res: Response): Promise<User> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone } = req.body
    const newUSer = UserRepository.create()

    await UserRepository.save(newUSer)
    return newUSer
  }

  async listOneAniver(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await UserRepository.findOneBy({ id: String(id) })

      if (!user) {
        return res.status(404).json({ message: 'Aniversariante não existe' })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async listAllAniver(req: Request, res: Response) {
    try {
      const users = await UserRepository.find()
      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async updateAniver(req: Request, res: Response) {
    const { id } = req.params

    return await UserRepository.update(
      { id: String(id) },
      {
        name: req.body.name,
        birthDate: req.body.birthDate,
        sexualOrientation: req.body.sexualOrientation,
        email: req.body.email,
        lastEmail: req.body.lastEmail,
        fone: req.body.fone,
      },
    )
  }

  async deleteAniver(req: Request, res: Response) {
    const { id } = req.params
    await UserRepository.delete({ id: String(id) })
  }
}
