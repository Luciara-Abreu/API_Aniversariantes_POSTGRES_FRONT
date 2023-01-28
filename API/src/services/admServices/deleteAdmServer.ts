import AppError from '@shared/errors/AppError'
import admRepository from 'src/repositories/AdmRepository'

interface IRequest {
  id: string
}
class DeleteAdmService {
  public async execute({ id }: IRequest): Promise<void> {
    const adm = await admRepository.findOneBy({ id })
    if (adm) {
      await admRepository.remove(adm)
      console.log(`adm ${adm.name} do ${adm.id}}, deletado com sucesso!`)
    } else {
      throw new AppError('adm not found 👻')
    }
  }
}

export default DeleteAdmService
