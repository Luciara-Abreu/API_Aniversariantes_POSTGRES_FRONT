import { useRef } from 'react';
import button from '../../../../src/assets/Imag/216151_right_chevron_icon.png'
import ListUsers from '../listUsers/index'
import { Container, ContainerCarrocel, ContainerButtons, ButtonRight, ButtonLefth } from './styles'

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
        <ButtonRight className="buttonRight" onClick={handleLeftClick}>
          <img src={button} alt="Botão1" />
        </ButtonRight>
        <ButtonLefth className="buttonLefth" onClick={handleRightClick}>
          <img src={button} alt="Botão2" />
        </ButtonLefth>
      </ContainerButtons>
    </Container>
  )
}

export default Carroucel;
