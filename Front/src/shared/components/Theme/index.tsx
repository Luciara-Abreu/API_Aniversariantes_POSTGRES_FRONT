import { ReactNode } from 'react'
import Header from '../Header'
import * as S from './styles'

type Props = {
  children: ReactNode;
}

const Theme = ({children}: Props) => {
  return (
    <S.Container>
        <Header />
      <S.Area>
        <S.Steps>
          <S.Pages>
           {children}
          </S.Pages>
        </S.Steps>
      </S.Area>
    </S.Container>
  )
}

export default Theme;