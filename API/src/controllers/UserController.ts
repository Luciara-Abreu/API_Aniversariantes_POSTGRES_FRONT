import { Request, Response } from 'express'
import User from 'src/entities/User'

import userRepository from '../modules/repositories/UserRepository'

class UserController {
  async createUser(req: Request, res: Response): Promise<User> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone } = req.body
    const newUser = userRepository.create()

    await userRepository.save(newUser)
    return newUser
  }

  async listOneAniver(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await userRepository.findOneBy({ id: Number(id) })

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
      const users = await userRepository.find()
      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async updateAniver(req: Request, res: Response) {
    const { id } = req.params

    return await userRepository.update(
      { id: Number(id) },
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
    await userRepository.delete({ id: Number(id) })
  }
}

export default UserController
