import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity('adms')
export class Adm extends User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  Password: string

  @Column({ type: 'timestamp' })
  created_at: Date

  @Column({ type: 'timestamp' })
  updated_at: Date
}
