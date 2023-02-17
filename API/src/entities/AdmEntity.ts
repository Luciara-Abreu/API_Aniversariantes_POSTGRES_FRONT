import { Column, Entity, OneToOne } from 'typeorm'

import User from './UserEntity'
import { Exclude } from 'class-transformer'
import Avatar from './avatarEmtity'
@Entity('adms')
class Adm extends User {
  @Column({ type: 'text' })
  @Exclude()
  password: string

  @OneToOne(() => Adm, adm => adm.avatar)
  avatar: Avatar
}

export default Adm

/**
 *   @OneToOne(() => AdmToken, admTokens => admTokens.adm)
  admTokens: AdmToken
 */
