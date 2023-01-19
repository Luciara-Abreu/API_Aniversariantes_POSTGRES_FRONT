export interface IUserType {
  id: string
  name: string
  birthDate: Date
  sexualOrientation: string
  email: string
  lastEmail?: string | undefined
  fone: number
  password?: string
}

export type ActionType = {
  type: FormAction
  payload: any
}

export enum FormAction {
  setName,
  setEmail,
  setFone,
  setBirthdate,
  setPassword,
}

export type ChangeContextType = {
  state: IUserType
  dispatch: (action: ActionType) => void
}
