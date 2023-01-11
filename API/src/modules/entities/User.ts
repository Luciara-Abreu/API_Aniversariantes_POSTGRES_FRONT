import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import { Post } from './Post'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: string

  @Column()
  name: string

  @CreateDateColumn()
  birthDate: Date

  @Column()
  sexualOrientation: string

  @Column()
  email: string

  @Column()
  lastEmail: string

  @Column({ type: 'text' })
  fone: number

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @OneToMany(() => Post, post => post.user)
  posts: []
}
