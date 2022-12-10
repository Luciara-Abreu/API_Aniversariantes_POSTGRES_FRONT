
export interface IUserType  {
  id: string,
  name: string,
  fone: string,
  birthdate: string,
  email: string,
  password?: string
}


export type ActionType = {
  type: FormAction,
  payload: any
}

export enum FormAction {
 setName,
 setEmail,
 setFone,
 setBirthdate,
 setPassword
}

export type ChangeContextType = {
  state: IUserType,
  dispatch: (action: ActionType ) => void
}


export const initialData: IUserType = {
  id: '',
  name: '',
  email: '',
  fone: '',
  birthdate:'',
  password: ''
}