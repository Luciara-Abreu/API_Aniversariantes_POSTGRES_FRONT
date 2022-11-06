import { useState } from 'react';
import Header from '../../components/header';
import { Body, Container } from '../styles';


const AddUsers: React.FC = () => {
  
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [birthDate, setBirthDate] = useState("")
  const [fone, setFone] = useState("")
  
  const creatUsers = () => {
    console.log({name, email})
  }

  return (
    <Container>
      <Header />
      <Body> 
        <input value={name} onChange={e => setName(e.target.value)}type="text" placeholder='Nome' />
        <input value={email} onChange={e => setEmail(e.target.value)}type="text" placeholder='E-mail' />
        <input value={birthDate} onChange={e => setBirthDate(e.target.value)}type="text" placeholder='Data de Nascimento' />
        <input value={fone} onChange={e => setFone(e.target.value)}type="text" placeholder='Fone/WhatsApp' />
      </Body>    
            <div>
        <button onClick={creatUsers}>Editar Aniversariantes </button>
      </div>   
    </Container>
  )
}

export default AddUsers