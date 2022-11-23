import styled from 'styled-components';
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
`
const BodyContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const BodyWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  //background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
  //background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
  //background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
  //background: linear-gradient(to left, #bdebf5, #dbbee9);
  `

export {
  Container,
  BodyContainer,
  BodyWrap
}