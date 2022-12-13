
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState, useEffect } from "react"
import { app } from '../../../libs/firebase'
import * as S from './styles'
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

const ListTOP10 = () => {

  const [users, setUsers] = useState([])

  const db = getFirestore(app)
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

  /*const getUsers = async () => {
    const data = await getDocs(usersCollectionRef)
    return console.log(data);
  }*/


  return (
    <S.Container>
      <S.TitleTop10>OS PRÓXIMOS 10 ANIVERSARIANTES DO MÊS</S.TitleTop10>

      <S.SubTitles>
        <p className="Name">Nome</p>
        <p className="birthdate">Data Nasc.</p>
        <p className="email">Email</p>
        <p className="whatsApp">WhatsApp.</p>
      </S.SubTitles>


      <S.HR> _________________________________________________________________________________________________________ </S.HR>
      <S.BesideInputContainer>
        <S.Data className="ContainerName">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.name}
                </li>
              )
            })}
          </ul>
        </S.Data>

        <S.Data className="ContainerBirthdate">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.birthDate}
                </li>
              )
            })}
          </ul>
        </S.Data>

        <S.Data className="ContainerEmail">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.email}
                </li>
              )
            })}
          </ul>
        </S.Data>
        <S.Data className="ContainerWhatsApp">
          <ul>
            {users.map(users => {
              return (
                <li>
                  {users.fone}
                </li>
              )
            })}
          </ul>
        </S.Data>
      </S.BesideInputContainer>
    </S.Container>
  )
}
export default ListTOP10
