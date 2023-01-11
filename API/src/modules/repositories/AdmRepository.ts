import { Adm } from '@modules/entities/Adm'
import AppDataSource from 'src/data-source'




export const AdmRepository = AppDataSource.getRepository(Adm)
