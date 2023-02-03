import admRepository from 'src/repositories/AdmRepository'
import { Column, CreateDateColumn, Entity, Generated, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Adm from './UserEntity'

@Entity('admTokens')
class AdmToken {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  @Generated('uuid')
  token: string

  @Column({ type: 'varchar' })
  userID: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Adm, adm => adm.admTokens)
  @JoinColumn({ name: 'userID' })
  adm: Adm
}

export default AdmToken
