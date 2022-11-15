import styled from 'styled-components'

const ContainerRoot = styled.div`
  width: 100%;
  //margin: 0 auto;
`

const Container = styled.div`
  width: 100%;
  min-height: 79vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 5px;  
  background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
  background: linear-gradient(to left, #bdebf5, #dbbee9);
`
const Body = styled.div`
  width: 50%;
  height: 90%;
  border-radius: 10px;
  overflow: hidden;
  padding: 77px 55px 33px 55px;  
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  background: linear-gradient(to left,#696868,#545353);
  h1{
    color: #fff;
    text-shadow: 0px 0px 3px #f05be6;
    font:normal 25px "Courier New", Courier, monospace;
  }
`
const ContainerButton = styled.div`
`

export {
  ContainerRoot,
  Container,
  Body,
  ContainerButton,
}
