import AppDataSource from 'src/data-source'
import Adm from 'src/entities/AdmEntity'


const admRepository = AppDataSource.getRepository(Adm)



export default admRepository
