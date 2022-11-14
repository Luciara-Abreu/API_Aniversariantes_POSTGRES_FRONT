import styled from 'styled-components'

const Container = styled.div`
max-width: 100%;
`
const ContainerCarrocel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-x: auto;
  scroll-behavior: smooth;
  box-shadow: 12px 12px 12px 12px rgba(241 228 228 / 20%);
  background-color: #e1e1e1;  
  border-radius: 10px;

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