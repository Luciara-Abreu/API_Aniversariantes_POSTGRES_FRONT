
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState, useEffect } from "react"
import firebaseConfig from "../../services/config/firebase";
import { Container, ContainerSemana, Semanas, TileSemana, ContainerData, Data } from './styles'
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

const ListUsers = () => {

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
    <Container>
      <ContainerSemana>
        <Semanas>
          <TileSemana>Domingo</TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Segunda-feira
          </TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Treça-feira</TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Quarta-feira</TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Quinta-feira</TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Sexta-feira</TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Sababo</TileSemana>
          <Data>
            <ContainerData>
              <ul>
                <p>Nome</p>
                {users.map(users => {
                  return (
                    <li>{users.name}</li>
                  )
                })}
              </ul>
            </ContainerData>
            <ContainerData>
              <ul>
                <p>Birthdate</p>
                {users.map(users => {
                  return (
                    <li>{users.birthDate}</li>
                  )
                })}
              </ul>
            </ContainerData>
          </Data>
        </Semanas>
      </ContainerSemana>
    </Container>
  )
}
export default ListUsers
/*
<h1>Nome: {name}{setName}</h1> 
<h1>E-mail: {email}{setEmail}</h1>
<h1>Data de nascimento: {birthDate}{setBirthDate}</h1>
<h1>diversos: {users} {setUsers}</h1>

*/