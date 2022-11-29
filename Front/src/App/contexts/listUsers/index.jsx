
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState, useEffect } from "react"
import { Container, ContainerSemana, Semanas, TileSemana, SubTitles, HR, Data } from './styles'
// https://www.youtube.com/watch?v=gqbXnYhvB5E&t=264s

import firebaseConfig from "../../db/config/firebase";

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
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Segunga-Feira</TileSemana>
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Terça-Feira</TileSemana>
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Quarta-Feira</TileSemana>
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Quinta-Feira</TileSemana>
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Sexta-Feira</TileSemana>
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
          </Data>
        </Semanas>
        <Semanas>
          <TileSemana>Sábado</TileSemana>
          <SubTitles>
            <p className="Name">Nome</p>
            <p className="birthdate">Data Nasc.</p>
          </SubTitles>
          <HR> ____________________________________________________ </HR>
          <Data>
            <div className="ContainerName">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.name}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div className="ContainerBirthdate">
              <ul>
                {users.map(users => {
                  return (
                    <li>
                      {users.birthDate}
                    </li>
                  )
                })}
              </ul>
            </div>
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