import AppError from '@shared/errors/AppError'
import IAdmType from 'src/interfaces/IAdm'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'
import { hash } from 'bcryptjs'

class CreateAdmService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password }: IAdmType): Promise<Adm> {
    const emailExist = await admRepository.findByEmail(email)
    const nameExist = await admRepository.findByName(name)
    const birthDateExist = await admRepository.findBybirthDate(birthDate)

    if (emailExist && nameExist && birthDateExist) {
      throw new AppError('Adm alread exist with this data (Name, email birthDate) 🤪')
    } else if (nameExist) {
      throw new AppError('Adm alread exist with this data (Name)🤪')
    } else if (emailExist) {
      throw new AppError('Adm alread exist with this data (email)🤪')
    }

    const hashedPassword = await hash(password, 8)

    const salveAdm = admRepository.create({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
      password: hashedPassword,
    })

    await admRepository.save(salveAdm)
    return salveAdm
  }
}

export default CreateAdmService
