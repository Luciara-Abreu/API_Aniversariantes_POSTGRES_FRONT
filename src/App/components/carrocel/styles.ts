import styled from 'styled-components'

const Container = styled.div`
max-width: 88vw;
`
const ContainerCarrocel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  box-shadow: 12px 12px 12px 12px rgba(79,209,197,.64);
  background-color: #e1e1e1;

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
  width: 100%;
  display:flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer;
  transform: rotate(180deg);
  img {
    width:5%
  }
`
const ButtonLefth = styled.div`
  width: 100%;
  display:flex;
  align-items: center;
  background-color: transparent;
  border: none;
  cursor: pointer; 
  img {
    width:5%
  }
`

export {
  Container,
  ContainerCarrocel,
  ContainerButtons,
  ButtonRight,
  ButtonLefth
}