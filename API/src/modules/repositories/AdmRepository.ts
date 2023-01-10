import { Adm } from '@modules/entities/Adm'
import { AppDataSource } from 'src/data-source'

const dataSource = AppDataSource

export const AdmRepository = dataSource.getRepository(Adm)
