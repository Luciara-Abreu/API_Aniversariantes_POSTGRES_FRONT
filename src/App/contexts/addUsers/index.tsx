import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import firebaseConfig from '../../services/config/firebase';


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
    <div>
      <div> 
        <input value={name} onChange={e => setName(e.target.value)}type="text" placeholder='Nome' />
        <input value={email} onChange={e => setEmail(e.target.value)}type="text" placeholder='E-mail' />
        <input value={birthDate} onChange={e => setBirthDate(e.target.value)}type="text" placeholder='Data de Nascimento' />
        <input value={fone} onChange={e => setFone(e.target.value)}type="text" placeholder='Fone/WhatsApp' />
      
      <div>
        <button onClick={creatUsers}>Add Aniversariantes </button>
        <button onClick={handleClick}>Editar Aniversariantes </button>
      </div>   
      </div>   
    </div>
  )
}

export default AddUsers

