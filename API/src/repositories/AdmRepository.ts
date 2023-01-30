import AppDataSource from 'src/config/data-source'
import Adm from 'src/entities/AdmEntity'

const admRepository = AppDataSource.getRepository(Adm).extend({
  async findByName(name: string): Promise<Adm | null> {
    const Adm = await this.findOne({
      where: {
        name,
      },
    })
    return Adm
  },
  async findByNameAndDate(name: string, birthDate: Date): Promise<Adm | null> {
    const adm = await this.findOne({
      where: {
        name,
        birthDate,
      },
    })
    return adm
  },
  async findByEmail(email: string): Promise<Adm | null> {
    const adm = await this.findOne({
      where: {
        email,
      },
    })
    return adm
  },
  async findBybirthDate(birthDate: Date): Promise<Adm | null> {
    const adm = await this.findOne({
      where: {
        birthDate,
      },
    })
    return adm
  },
  async findById(id: string): Promise<Adm | null> {
    const Adm = await this.findOne({
      where: {
        id,
      },
    })
    return Adm
  },
})

export default admRepository
