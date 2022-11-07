import { collection, getDocs, getFirestore, doc, deleteDoc } from "firebase/firestore"
import { useState, useEffect } from "react"
import firebaseConfig from "../../config/firebase";
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

const EditUsers = () => {
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

  // Deleta aniversriantes
  async function deleteUser(id) {
    const userDoc = doc(db, 'users', id)
    await deleteDoc(userDoc)
  }

  return (
    <div>
      <ul>
        {users.map(users => {
          return (
            <div>
              <li>{users.name}
                <button onClick={() => deleteUser(users.id)}>Deletar Aniversariante</button>
              </li>
            </div>
          )
        })}
      </ul>
    </div>
  )
}
export default EditUsers
