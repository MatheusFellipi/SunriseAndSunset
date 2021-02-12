import React from 'react';
import imgNuves from '../../assestes/img/nuvens.png'


import { Container, Sol, Img, Img2 } from './styled';

function Dia() {
  return (
    <>

      <Img src={imgNuves} />
      <Img2 src={imgNuves} />
      <Container>
        <Sol>
        </Sol>
      </Container>
    </>

  );
}

export default Dia;