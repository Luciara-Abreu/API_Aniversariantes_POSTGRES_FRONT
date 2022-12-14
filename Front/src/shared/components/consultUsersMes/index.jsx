
import { getDocs } from "firebase/firestore"
import { useState, useEffect } from "react"
import { userRef } from "../../../libs/firebase"
import * as S from './styles'

const ConsultUsersMes = () => {
  const [setList] = useState([])

  // trás todos os dados que estão cadastrados no banco
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(userRef)
      const usersCadastrados = (data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      setList(usersCadastrados)
    }
    getUsers()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <S.Container>
      <S.Title> Aqui mostrará uma tabela de aniversariantes conforme mês selecionado </S.Title>
      <S.DiaSemana>
        <ul>

        </ul>
      </S.DiaSemana>
    </S.Container>
  )
}
export default ConsultUsersMes


