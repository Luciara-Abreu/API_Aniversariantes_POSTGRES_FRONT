import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm'
import  User  from './UserEntity'

@Entity('posts')
class Post {
  @PrimaryGeneratedColumn()
  id: string

  @Column()
  title: string

  @Column()
  content: string

  @Column()
  userID: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

  @ManyToOne(() => User, user => user.posts)
  @JoinColumn({ name: 'userID' })
  user: User
}

export default Post
