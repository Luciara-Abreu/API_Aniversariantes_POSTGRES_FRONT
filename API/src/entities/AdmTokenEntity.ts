import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import  User  from './UserEntity'

@Entity('admsTokens')
class AdmsTokens extends User{
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'uuid' })
  token: string

  @Column({ type: 'varchar' })
  userID: string


}



export default AdmsTokens
