import AppDataSource from '@config/data-source'
import AppError from '@shared/errors/AppError'
import AdmToken from 'src/entities/AdmTokenEntity'
import { Repository } from 'typeorm'

const AdmTokenRepository = AppDataSource.getRepository(AdmToken).extend({
  async findByToken(token: string): Promise<AdmToken | undefined> {
    const admToken = await this.findOne({
      where: {
        token,
      },
    })
    if (!admToken) {
      throw new AppError('Token does not exist')
    }
    return admToken
  },

  async generete(admID: string): Promise<AdmToken | undefined> {
    const admToken = await this.create({
      admID
    })
    await this.save(admToken)
    return admToken
  },



})

export default AdmTokenRepository
