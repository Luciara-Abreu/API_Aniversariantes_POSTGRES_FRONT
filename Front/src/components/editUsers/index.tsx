import { collection, addDoc, getDocs, getFirestore} from "firebase/firestore"
import { Container, WrapInput, ContainerButton, BesideInputContainer } from './styles'
import firebaseConfig from "../../libs/firebase"
import { useEffect} from "react"
import { ChangeEvent } from 'react'
import { useForm } from "react-hook-form"
import { FormAction } from "../../interfaces/User"


const EditUsers= ()=> {
  const {handleSubmit} = useForm();
  const db = getFirestore(firebaseConfig)
  const usersCollectionRef = collection(db, "users")

  const { state, dispatch } = useFormAuthContext()

  //Chenge Name
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormAction.setName,
      payload: e.target.value
    })
  }
  
  //Chenge email
  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormAction.setEmail,
      payload: e.target.value
    })
  }

  //Change bitrthdate
  const handleBirthdateChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormAction.setBirthdate,
      payload: e.target.value
    })
  }
  //Chance Fone
  const handleFoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type:FormAction.setFone,
      payload: e.target.value
    })
  }
  
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      const usersCadastrados = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      return (usersCadastrados)
    }
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const nameChange = handleNameChange
  const emailChange = handleEmailChange
  const birthdateChange = handleBirthdateChange
  const foneChange = handleFoneChange

    //Salvar no banco os dados dos usuários 
    async function onSubmit() {
      const user = await addDoc(usersCollectionRef, {
        nameChange, emailChange, birthdateChange, foneChange
      })
      console.log(user)
    }


  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> Editar dados do aniversariante </h1>
        <WrapInput>
          <label>      
            <input className={state.name !== "" ? 'has-val input' : 'input'}
              value={state.name}
              onChange={handleNameChange} />
            <span className='FocusInput' data-placeholder='Digite o nome completo do aniversariante'></span>
            <span className="MessageError">{""}</span>
          </label>
        </WrapInput>

        <WrapInput>
          <label>
            <input className={state.email !== "" ? 'has-val input' : 'input'}
              value={state.email}
              onChange={handleEmailChange} />
            <span className='FocusInput' data-placeholder='e-mail'></span>
            <span className="MessageError">{""}</span>
          </label>
        </WrapInput>

        <BesideInputContainer>
          <WrapInput>
            <label>
              <input className={state.birthdate !== "" ? 'has-val input' : 'input'}
                value={state.birthdate}
                onChange={handleBirthdateChange} />
              <span className='FocusInput' data-placeholder='Data de Nascimento.'></span>
              <span className="MessageError">{""}</span>
            </label>
          </WrapInput>

          <WrapInput>
            <label>
              <input className={state.fone !== "" ? 'has-val input' : 'input'}
                value={state.fone}
                onChange={handleFoneChange} />
              <span className='FocusInput' data-placeholder='Fone / Wahts.'></span>
              <span className="MessageError">{""}</span>
            </label>
          </WrapInput>
        </BesideInputContainer>

        <ContainerButton>
          <button className="login-form-btn" onClick={onSubmit}>Salvar </button>
        </ContainerButton>
      </form>
    </Container>
  )
}
export default EditUsers



function useFormAuthContext(): { state: any; dispatch: any } {
  throw new Error("Function not implemented.")
}

