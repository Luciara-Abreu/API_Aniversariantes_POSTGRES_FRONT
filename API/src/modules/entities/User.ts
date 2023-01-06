import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'
import { Post } from './Post'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ type: 'text' })
  name: string

  @Column({ type: 'text' })
  birthDate: Date

  @Column({ type: 'text' })
  sexualOrientation: string

  @Column({ type: 'text' })
  email: string

  @Column({ type: 'text' })
  lastEmail: string

  @Column({ type: 'text' })
  fone: number

  @Column({ type: 'timestamp' })
  created_at: Date

  @Column({ type: 'timestamp' })
  updated_at: Date

  @OneToMany(() => Post, post => post.user)
  posts: []
}
