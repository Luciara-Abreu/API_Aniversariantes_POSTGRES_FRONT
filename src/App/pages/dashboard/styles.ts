import styled from 'styled-components';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`

const BodyWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  border-radius: 11px;
  overflow: hidden;
  padding: 30px 50px 25px 50px;

  background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
  background: linear-gradient(to left, #bdebf5, #dbbee9);
  `

export {
  Container,  
  BodyWrap
}