import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebaseConfig from '../../services/config/firebase';
import { ContainerRoot, Container,Body,WrapInput, ContainerButton } from './styles';


const AddUsers: React.FC = () => {

  const history = useHistory();
  const handleClick = () => {
    history.push('/editar')
  }  
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [fone, setFone] = useState("")  

  const db = getFirestore(firebaseConfig)
  const usersCollectionRef = collection(db, "users")
  
  //Add novos usuários no  banco de dados
  async function creatUsers() {    
    const user = await addDoc(usersCollectionRef,{
      name, email, birthDate, fone
    })
    console.log(user)
  }
  return (
    <ContainerRoot>
    <Container>
      <Body> 
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
      
      <ContainerButton>
        <button className="login-form-btn" onClick={creatUsers}>Add Aniversariantes </button>
      </ContainerButton>   
      <ContainerButton>
        <button className="login-form-btn" onClick={handleClick}>Editar Aniversariantes </button>
      </ContainerButton>   
      </Body>   
    </Container>
    </ContainerRoot>
  )
}

export default AddUsers

