import { Column,  Entity, OneToOne } from 'typeorm'
import AdmToken from './AdmTokenEntity'
import  User  from './UserEntity'

@Entity('adms')
class Adm extends User{
  @Column({ type: 'text' })
  password: string
  avatar: any

  @OneToOne(() => AdmToken, admTokens => admTokens.adm)
  admTokens: AdmToken

}
export default Adm

