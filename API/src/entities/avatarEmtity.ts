import { ByteLengthQueuingStrategy } from 'node:stream/web'
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import User from './UserEntity'

@Entity('avatars')
class Avatar {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'text' })
  avatar: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.avatars)
  @JoinColumn({ name: 'userID' })
  user: User
}
export default Avatar
