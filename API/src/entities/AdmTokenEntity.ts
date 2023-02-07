import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'

@Entity('admTokens')
class AdmToken {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  @Generated('uuid')
  token: string

  @Column()
  admID: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}

export default AdmToken

/**
 *   @ManyToOne(() => Adm, adm => adm.admTokens)
  @JoinColumn({ name: 'admID' })
  adm: Adm
 */
