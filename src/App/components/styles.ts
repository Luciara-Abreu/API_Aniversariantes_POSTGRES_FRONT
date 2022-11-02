import styled from "styled-components";

const HeaderContainer = styled.div`
background: red;
padding: 0.3% 0.3%;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`
const Button =styled.div`
width: 100%;
gap: 1rem;
`
export {
  HeaderContainer,
  ButtonContainer,
  Button
}
