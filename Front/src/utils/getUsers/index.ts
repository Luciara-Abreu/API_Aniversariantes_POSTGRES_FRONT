import { collection, getDocs, getFirestore } from "firebase/firestore"
import firebaseConfig from "../../libs/firebase";
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

  const db = getFirestore(firebaseConfig)
  const usersCollectionRef = collection(db, "users")


 // trás todos os dados dos usuários que estão cadastrados no banco
  const userAll = (() => {
    const getUsers = async () => {
      let data = await getDocs(usersCollectionRef)
      let dataUsers = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      let users = JSON.stringify(dataUsers)
      //console.log('Aniversario ===> ', users)
      return users
    }
    return getUsers()
  })
  
  const UserAll = userAll()
  console.log('Aniversario ===> ', UserAll)
export {
  UserAll
}