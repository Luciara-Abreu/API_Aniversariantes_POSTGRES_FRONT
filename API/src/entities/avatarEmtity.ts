import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Adm from './AdmEntity'

@Entity('avatars')
class Avatar {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'text' })
  avatar: string

  @Column({ type: 'varchar' })
  admID: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => Adm, adm => adm.avatar)
  @JoinColumn({ name: 'admID' })
  adm: Adm
}
export default Avatar
