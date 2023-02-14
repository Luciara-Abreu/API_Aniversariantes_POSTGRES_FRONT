import AppDataSource from 'src/config/data-source'
import Adm from 'src/entities/AdmEntity'

const AdmRepository = AppDataSource.getRepository(Adm).extend({
  async findByName(name: string): Promise<Adm | null> {
    const adm = await this.findOneBy({ name })
    return adm
  },

  async findByEmail(email: string): Promise<Adm | null> {
    const adm = await this.findOneBy({ email })
    return adm
  },

  async findBybirthDate(birthDate: Date): Promise<Adm | null> {
    const adm = await this.findOneBy({ birthDate })
    return adm
  },

  async findById(id: string): Promise<Adm | null> {
    const adm = await this.findOneBy({ id })
    return adm
  },
  
  async findByPassword(password: string): Promise<Adm | null> {
    const adm = await this.findOneBy({ password })
    return adm
  },
})

export default AdmRepository
