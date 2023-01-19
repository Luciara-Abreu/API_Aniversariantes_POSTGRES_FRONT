import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import Post from './PostEntity'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

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
}


