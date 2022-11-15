import styled from 'styled-components'

const Container = styled.div`
max-width: 100%;
`
const ContainerCarrocel = styled.div`
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;
  box-shadow: 1px 1px 13px 5px rgb(200 198 213);

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
    width:4%;
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
    width:4%
  } 
`

export {
  Container,
  ContainerCarrocel,
  ContainerButtons,
  ButtonRight,
  ButtonLefth
}