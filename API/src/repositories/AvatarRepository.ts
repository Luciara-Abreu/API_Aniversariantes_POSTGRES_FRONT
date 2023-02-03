import AppDataSource from 'src/config/data-source'
import Avatar from 'src/entities/avatarEmtity'



const avatarRepository = AppDataSource.getRepository(Avatar)


export default avatarRepository
