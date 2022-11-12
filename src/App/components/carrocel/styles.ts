import styled from 'styled-components'

const Container = styled.div`
max-width: 75vw;
`
const ContainerCarrocel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  box-shadow: 12px 12px 24px rgba(79,209,197,.64);

::-webkit-scrollbar {
  display: none;
}
`
const ContainerButtons = styled.div`
  display:flex;
  width: 100%;
  justify-content: center;
  align-items: center;
`
const ButtonRight = styled.div`
  width: 2%;
  display:flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
`
const ButtonLefth = styled.div`
  width: 2%;
  display:flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer; 
`

export {
  Container,
  ContainerCarrocel,
  ContainerButtons,
  ButtonRight,
  ButtonLefth
}