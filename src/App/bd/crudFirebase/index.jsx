
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState, useEffect } from "react"
import firebaseConfig from "../config/firebase";
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

const CrudFireBase = () => {

  const [users, setUsers] = useState([])
  const db = getFirestore(firebaseConfig)
  const usersCollectionRef = collection(db, "users")

  // trás todos os dados que estão cadastrados no banco
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef)
      const usersCadastrados = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setUsers(usersCadastrados)
    }
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <ul>
        {users.map(users => {
          return (
            <div>
              <li>{users.name}</li>
              <li>{users.birthDate}</li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
export default CrudFireBase
/*
<h1>Nome: {name}{setName}</h1> 
<h1>E-mail: {email}{setEmail}</h1>
<h1>Data de nascimento: {birthDate}{setBirthDate}</h1>
<h1>diversos: {users} {setUsers}</h1>

*/