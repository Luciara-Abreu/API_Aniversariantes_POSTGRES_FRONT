import Adm from 'src/entities/AdmEntity'
import admRepository from 'src/repositories/AdmRepository'

class ListAllAdmService {
  public async execute(): Promise<Adm[]> {
    const admRepo = admRepository
    const adms = await admRepo.find()
    return adms
  }
}

export default ListAllAdmService
