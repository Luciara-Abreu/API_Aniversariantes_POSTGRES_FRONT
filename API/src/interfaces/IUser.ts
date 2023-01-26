interface IUserType {
  id?: number
  name: string
  birthDate: Date
  sexualOrientation: string
  email: string
  lastEmail: string | undefined
  fone: number
  avatar: string | undefined
}

export default IUserType
