import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Avatar from './avatarEmtity'
import Post from './PostEntity'

@Entity('users')
class User {
  @PrimaryGeneratedColumn()
  id: string

  @Column({ type: 'text' })
  name: string

  @CreateDateColumn()
  birthDate: Date

  @Column({ type: 'text' })
  sexualOrientation: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'text' })
  lastEmail: string | undefined

  @Column({ type: 'text' })
  fone: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Post, post => post.user)
  posts: Post[]

  @OneToOne(() => Avatar, avatar => avatar.user)
  avatars: Avatar
}
export default User
