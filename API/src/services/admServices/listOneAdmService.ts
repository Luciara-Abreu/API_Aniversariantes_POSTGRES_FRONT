import AppError from '@shared/errors/AppError'
import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'

interface IRequest {
  id: string
}
class ListOneAdmService {
  public async execute({ id }: IRequest): Promise<Adm> {
    const Adm = await admRepository.findOneBy({ id })

    if (!Adm) {
      throw new AppError('Adm not found 👻')
    } else {
      console.log(Adm)
    }
    return Adm
  }
}

export default ListOneAdmService
