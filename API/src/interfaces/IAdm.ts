import IUserType from './IUser'

interface IAdmType extends IUserType {
  password?: string
  old_password?: string
}

export default IAdmType
