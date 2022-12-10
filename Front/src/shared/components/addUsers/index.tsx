import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { app } from '../../../../src/api/libs/firebase'
import { Container, WrapInput, ContainerButton, BesideInputContainer } from './styles';


const AddUsers: React.FC = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/editar')
  }  
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [fone, setFone] = useState("")  

  const db = getFirestore(app)
  const usersCollectionRef = collection(db, "users")
  
  //Add novos usuários no  banco de dados
  async function creatUsers() {    
    const user = await addDoc(usersCollectionRef,{
      name, email, birthDate, fone
    })
    console.log(user)
  }
  return (
      <Container> 
        <h1> Preencha os dados abaixo </h1> 
        <WrapInput>
        <input className={name !== "" ? 'has-val input' : 'input'}
                type='name'
                value={name} 
                onChange={e => setName(e.target.value)} />
        <span className='FocusInput' data-placeholder='Nome Completo'></span>
        </WrapInput>

        <WrapInput>
        <input className={email !== "" ? 'has-val input' : 'input'}
                type='email'
                value={email} 
                onChange={e => setEmail(e.target.value)} />
        <span className='FocusInput' data-placeholder='e-mail'></span>
        </WrapInput>

        <BesideInputContainer>
        <WrapInput>
        <input className={birthDate !== "" ? 'has-val input' : 'input'}
                type='birthDate'
                value={birthDate} 
                onChange={e => setBirthDate(e.target.value)} />
        <span className='FocusInput' data-placeholder='Data de Nascimento.'></span>
        </WrapInput>

        <WrapInput>
        <input className={fone !== "" ? 'has-val input' : 'input'}
                type='fone'
                value={fone} 
                onChange={e => setFone(e.target.value)} />
        <span className='FocusInput' data-placeholder='Fone / WhatsApp'></span>        
        </WrapInput>
        </BesideInputContainer> 
      
      <ContainerButton>
        <button className="login-form-btn" onClick={creatUsers}>Add Aniversariantes </button>
        <button className="login-form-btn" onClick={handleClick}>Editar Aniversariantes </button>
      </ContainerButton>       
      </Container>   
  )
}

export default AddUsers

