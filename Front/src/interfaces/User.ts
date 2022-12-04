
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
  setCurrentStep,  //Qual é a etapa
 //Set... trocar os dados do state  
 setName,
 setEmail,
 setFone,
 setBirthdate,
 password
}

export type ContextType = {
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