import React, { useState } from 'react';


import { Janelas, Dia, Noites, Composicao } from '../../components'
import { Predio, Content, Button } from './styled';


export default function Predios({ isDiaNoite }) {

  const [isActive, setIsActive] = useState(false);
  const hadleActiveAll = () => {
    if (isActive) {
      setIsActive(false)
    }
    if (!isActive) {
      setIsActive(true)
    }
  }

  return (
    <>
      <Button onClick={hadleActiveAll}>Ligar/Desligar</Button>

      {isDiaNoite ? <Noites></Noites> : <Dia></Dia>}


      <>
        <Composicao isActive={isActive}></Composicao>
        <Predio >
          <Janelas isActive={isActive} />
        </Predio>
      </>
    </>

  )
}
