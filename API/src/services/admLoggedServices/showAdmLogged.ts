import admRepository from 'src/repositories/AdmRepository'
import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'

interface IRequest {
  id: string
}

class ShowProfileService {
  public async execute({ id }: IRequest): Promise<Adm> {
    const adm = await admRepository.findById(id)
    console.log('ADM LOGADO ===> ', adm)
    if (!adm) {
      throw new AppError('Adm not found.')
    }

    return adm
  }
}

export default ShowProfileService
