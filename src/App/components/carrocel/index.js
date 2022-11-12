import {  useRef } from 'react';
import button from '../../assets/Imag/216151_right_chevron_icon.png'
import ListUsers from '../../contexts/listUsers/index'
import { Container, ContainerCarrocel, ContainerButtons,ButtonRight, ButtonLefth } from './styles'

function Carroucel() {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();

    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Container>
      <ContainerCarrocel ref={carousel}>
      <ListUsers />
      </ContainerCarrocel>
    
      <ContainerButtons>
        <ButtonRight onClick={handleLeftClick}>
          <img src={button} />
        </ButtonRight>
        <ButtonLefth onClick={handleRightClick}>
          <img src={button} />
        </ButtonLefth>
      </ContainerButtons>
    </Container>
  )
}

export default Carroucel;
