import AppDataSource from 'src/data-source'
import Adm from 'src/entities/Adm'


const admRepository = AppDataSource.getRepository(Adm)

const adm = new Adm()
adm.name
adm.birthDate
adm.sexualOrientation
adm.email
adm.lastEmail
adm.fone
adm.password

admRepository.save(adm)

export default admRepository
