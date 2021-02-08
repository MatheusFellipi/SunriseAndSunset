import React, { useState } from 'react';
import styled from 'styled-components'

const Janelas = styled.div`
  width: 61px;
  height: 100px;
  margin: 10px;
  background-color:${({ isActive }) => isActive ? '#ffee00' : '#383838'};
  
`;

function Janela() {

  const arrayJanela = [];

  const [isActive, setIsActive] = useState(false);

  const hadleActive = () => {
    if (isActive) {
      console.log('desativo');
      setIsActive(false);
    } if (!isActive) {
      console.log('Ativo');
      setIsActive(true);
    }
  }

  for (let i = 0; i < 12; i++) {
    arrayJanela.push(<Janelas key={i} isActive={isActive} onClick={hadleActive}>
    </Janelas>)
  }

  return (
    <>
      { arrayJanela}
    </>
  );
}

export default Janela;