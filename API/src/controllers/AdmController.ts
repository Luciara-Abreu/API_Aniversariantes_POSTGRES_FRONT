import admRepository from '@modules/repositories/AdmRepository'
import { Request, Response } from 'express'
import Adm from 'src/entities/Adm'

class AdmController {
  async createAdm(req: Request, res: Response): Promise<Adm> {
    const { name, birthDate, sexualOrientation, email, lastEmail, fone, password } = req.body
    const newAdm = admRepository.create()

    await admRepository.save(newAdm)
    return newAdm
  }

  async listOneAdm(req: Request, res: Response) {
    const { id } = req.params

    try {
      const user = await admRepository.findOneBy({ id: Number(id) })

      if (!user) {
        return res.status(404).json({ message: 'Aniversariante não existe' })
      }
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async listAllAdm(req: Request, res: Response) {
    try {
      const users = await admRepository.find()
      return res.json(users)
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: 'Internal Sever Error' })
    }
  }

  async updateAdm(req: Request, res: Response) {
    const { id } = req.params
    const { name, birthDate, sexualOrientation, email, lastEmail, fone } = req.body

    return await admRepository.update(
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

  async deleteAdm(req: Request, res: Response) {
    const { id } = req.params
    await admRepository.delete({ id: Number(id) })
  }
}

export default AdmController
