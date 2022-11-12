import styled from 'styled-components';
const Container = styled.div`
  width: 100vw;
  margin: 0 auto;
`
const BodyContainer = styled.div`
  width: 99vw;
  min-height: 74vh;
  display: flex;
  justify-content: center;
  align-items: center;
  `
const BodyWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 77vh;
    border-radius: 11px;
    overflow: hidden;
    margin: 0 1% 0 1%;
    padding: 15px 10px 7px 19px;

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