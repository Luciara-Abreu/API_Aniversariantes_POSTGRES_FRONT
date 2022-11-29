
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState, useEffect } from "react"
import firebaseConfig from "../../db/config/firebase";
import { Container, TitleTop10, SubTitles, HR, Data, BesideInputContainer } from './styles'
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

const ListTOP10 = () => {

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

  const getUsers = async () => {
    const data = await getDocs(usersCollectionRef)
    return console.log(data);
  }


  return (
    <Container>
      <TitleTop10>OS PRÓXIMOS 10 ANIVERSARIANTES DO MÊS</TitleTop10>

      <SubTitles>
        <p className="Name">Nome</p>
        <p className="birthdate">Data Nasc.</p>
        <p className="email">Email</p>
        <p className="whatsApp">WhatsApp.</p>
      </SubTitles>


      <HR> ________________________________________________________________________________________________ </HR>
      <BesideInputContainer>
        <Data className="ContainerName">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.name}
                </li>
              )
            })}
          </ul>
        </Data>

        <Data className="ContainerBirthdate">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.birthDate}
                </li>
              )
            })}
          </ul>
        </Data>

        <Data className="ContainerEmail">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.email}
                </li>
              )
            })}
          </ul>
        </Data>
        <Data className="ContainerWhatsApp">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.fone}
                </li>
              )
            })}
          </ul>
        </Data>
      </BesideInputContainer>
    </Container>
  )
}
export default ListTOP10
/*
<h1>Nome: {name}{setName}</h1> 
<h1>E-mail: {email}{setEmail}</h1>
<h1>Data de nascimento: {birthDate}{setBirthDate}</h1>
<h1>diversos: {users} {setUsers}</h1>

*/