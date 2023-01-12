import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import  User  from './User'

@Entity('adms')
class Adm {

  @PrimaryGeneratedColumn('increment')
  id: number

  @Column({ type: 'int' })
  password: string

  @Column({ type: 'text' })
  name: string

  @CreateDateColumn()
  birthDate: Date

  @Column({ type: 'text' })
  sexualOrientation: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'text' })
  lastEmail: string

  @Column({ type: 'text' })
  fone: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}
export default Adm
