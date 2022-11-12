import styled from 'styled-components';
const Container = styled.div`
  width: 100%;
  margin: 0 auto;
`
const BodyContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  `
const BodyWrap = styled.div`
  width: 100%;
  min-height: 73vh;
  border-radius: 10px;
  overflow: hidden;
  padding: 7px 55px 33px 2px;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.2);
  background: -webkit-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -o-linear-gradient(to left, #bdebf5, #dbbee9);
  background: -moz-linear-gradient(to left, #bdebf5, #dbbee9);
  background: linear-gradient(to left, #bdebf5, #dbbee9);
  `
const BodyForm = styled.div`
 width: 100%;
  `
export {
  Container,
  BodyContainer,
  BodyWrap,
  BodyForm  
}