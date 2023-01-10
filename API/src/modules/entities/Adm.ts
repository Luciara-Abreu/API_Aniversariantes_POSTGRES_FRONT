import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
import { User } from './User'

@Entity('adms')
export class Adm extends User {

  @Column({ type: 'int' })
  password: string

}
