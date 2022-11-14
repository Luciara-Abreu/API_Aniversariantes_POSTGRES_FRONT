import styled from "styled-components";

const HeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  `
  const Title =styled.div`
  display: flex;
  color: #fff;
  text-shadow:0px 0px 3px #f05be6;
  font-size: 30px;
  `
  const Date =styled.div`
  display: flex;
  justify-content: center;
  `
  const ContainerUp =styled.div`
  width: 100%;
  overflow: hidden;
  padding: 20px 55px 33px 55px;
  display: flex;
  align-items: center;
  justify-content: center; 
  //background gradiente
  background: -webkit-linear-gradient(to left, #b721ff, #333);
  background: -o-linear-gradient(to left, #b721ff, #333);
  background: -moz-linear-gradient(to left, #b721ff, #333);
  background: linear-gradient(to left, #b721ff, #333);
  `
const ContainerMenu = styled.div`
  width: 75%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 1% 0 1% 0;
  gap: 0.2rem;
`
export {
  HeaderContainer,
  ContainerMenu,
  Title,
  Date,
  ContainerUp

}
