import AppDataSource from 'src/config/data-source'
import Adm from 'src/entities/AdmEntity'
import AdmToken from 'src/entities/AdmTokenEntity'


const admTokenRepository = AppDataSource.getRepository(AdmToken).extend({
  async findByToken(token: string): Promise<AdmToken | null> {
    const admToken = await this.findOne({
      where: {
        token,
      },
    })
    return admToken
  },

  async generete(userID: string): Promise<AdmToken | null> {
    const admToken = await this.create({
      userID
    })
    await this.save(admToken)
    return admToken
  },



})

export default admTokenRepository
