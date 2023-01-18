import { Request, Response } from 'express'
import userRepository from '../modules/repositories/UserRepository'

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const newUser = userRepository.create({
        name: req.body.name,
        birthDate: req.body.birthDate,
        sexualOrientation: req.body.sexualOrientation,
        email: req.body.email,
        lastEmail: req.body.lastEmail,
        fone: req.body.fone,
      })

      await userRepository.save(newUser)
      return res.status(201).json(newUser)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async listOneAniver(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await userRepository.findOneBy({ id: Number(id) })

      if (!user) {
        return res.status(404).json({ message: 'Aniversariante não existe' })
      }
      return res.status(200).json(user)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async listAllAnivers(req: Request, res: Response) {
    try {
      const users = await userRepository.query(`SELECT * FROM USERS`)
      if (!users) {
        return res.status(404).json({ message: 'Lista não existe' })
      }
      return res.status(200).json(users)
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
