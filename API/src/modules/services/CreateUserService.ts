import { AppDataSource } from 'src/data-source'
import { UserRepository } from '../repositories/UserRepository'

const dataSource = AppDataSource

interface IUserRequest {
  name: string
  birthDate: Date
  sexualOrientation: string
  email: string
  lastEmail: string
  fone: number
}

// https://youtu.be/FDnuLtSxEEQ

class CreateUserService {
  public async execute({
    name,
    birthDate,
    sexualOrientation,
    email,
    lastEmail,
    fone,
  }: IUserRequest) {
    //const usersRepo = getRepository(UserRepository)
  }
}
