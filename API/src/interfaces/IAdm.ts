import IUserType from './IUser'

interface IAdmTypeUndefined extends IUserType {
  id?: string
  password?: string
  old_password?: string
}
interface IAdmType extends IUserType {
  id?: string
  password: string
  old_password?: string
}

export default IAdmType
