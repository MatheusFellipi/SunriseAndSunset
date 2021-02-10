import React, { useState } from 'react';


import { Janelas, Dia, Noites } from '../../components'
import { Predio, Content } from './styled';


export default function Building({ isDiaNoite }) {

  return (
    <>
      {isDiaNoite ? <Noites></Noites> : <Dia></Dia>}
      <Content>
        <Predio >
          <Janelas />
        </Predio>
      </Content>
    </>

  )
}
