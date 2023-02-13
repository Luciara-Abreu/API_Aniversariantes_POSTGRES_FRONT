import AppError from '@shared/errors/AppError'
import AppDataSource from 'src/config/data-source'
import Adm from 'src/entities/AdmEntity'

const AdmRepository = AppDataSource.getRepository(Adm).extend({
  async findByName(name: string): Promise<Adm | undefined> {
    const adm = await this.findOne({
      where: {
        name,
      },
    })
    if (!adm) {
      throw new AppError('Adm does not exist')
    }
    return adm
  },

  async findByEmail(email: string): Promise<Adm | undefined> {
    const adm = await this.findOne({
      where: {
        email,
      },
    })
    if (!adm) {
      throw new AppError('Adm does not exist')
    }
    return adm
  },
  async findBybirthDate(birthDate: Date): Promise<Adm | undefined> {
    const adm = await this.findOne({
      where: {
        birthDate,
      },
    })
    if (!adm) {
      throw new AppError('Adm does not exist')
    }
    return adm
  },

  async findById(id: string): Promise<Adm> {
    const adm = await this.findOneBy({ id })

    if (!adm) {
      throw new AppError('Adm does not exist')
    }

    return adm
  },
})

export default AdmRepository
