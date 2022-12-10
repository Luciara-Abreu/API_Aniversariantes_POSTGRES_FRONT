
//import { UserAll } from '../../utils/getUsers'
import { useState } from "react"
import * as S from './styles'


const ConsultUsersMes = () => {
  const [user] = useState([])
 // console.log('USER.NAME aquiii=====>>>', user.name)
 // console.log('UserAll aquiii=====>>>', UserAll.name)

  return (
    <S.Container>
      <S.Title> Aqui mostrará uma tabela de aniversariantes conforme mês selecionado </S.Title>
      <S.DiaSemana>
        <div className="ContainerName">
          <p>Aqui consta uma tag</p>
          {user.map(users => {
            return (
              <div>
                {users.name}
              </div>
            )
          })}
        </div>
      </S.DiaSemana>
    </S.Container>
  )
}
export default ConsultUsersMes