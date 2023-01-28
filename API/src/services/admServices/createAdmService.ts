import AppError from '@shared/errors/AppError'
import IAdmType from 'src/interfaces/IAdm'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'

class CreateAdmService {
  public async execute({ name, birthDate, sexualOrientation, email, lastEmail, fone, avatar, password }: IAdmType): Promise<Adm> {
    const admExist = await admRepository.findOneBy({ name, birthDate })
    if (admExist) {
      throw new AppError('Adm alread exist with this data 🤪')
    }
    const salveAdm = admRepository.create({
      name,
      birthDate,
      sexualOrientation,
      email,
      lastEmail,
      fone,
      avatar,
      password,
    })

    await admRepository.save(salveAdm)
    return salveAdm
  }
}

export default CreateAdmService
