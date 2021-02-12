import React, { useState, useEffect } from 'react';
import {
  Predio, Predio02, Predio03, Predio04, Janelas01, Janelas02,
  Janelas03, Janelas04, Janelas05
} from './styled'
export default function Predios({ isActive }) {

  const [isActive01, setIsActive01] = useState(false);
  const [isActive02, setIsActive02] = useState(false);
  const [isActive03, setIsActive03] = useState(false);
  const [isActive04, setIsActive04] = useState(false);
  const [isActive05, setIsActive05] = useState(false);


  useEffect(() => {
    if (isActive) {
      setIsActive01(false);
      setIsActive02(false);
      setIsActive03(false);
      setIsActive04(false);
      setIsActive05(false);
    }
    if (!isActive) {
      setIsActive01(true);
      setIsActive02(true);
      setIsActive03(true);
      setIsActive04(true);
      setIsActive05(true);
    }
  }, [isActive])


  const hadleActive = (id) => {
    if (id === 1) {
      if (isActive01)
        setIsActive01(false);
      if (!isActive01) {
        setIsActive01(true);
      }
    }
    if (id === 2) {
      if (isActive02)
        setIsActive02(false);
      if (!isActive02)
        setIsActive02(true);
    }
    if (id === 3) {
      if (isActive03)
        setIsActive03(false);
      if (!isActive03)
        setIsActive03(true);
    }
    if (id === 4) {
      if (isActive04)
        setIsActive04(false);
      if (!isActive04)
        setIsActive04(true);
    }
    if (id === 5) {
      if (isActive05)
        setIsActive05(false);
      if (!isActive05)
        setIsActive05(true);
    }
  }


  return (
    <>
      <>
        <Predio03></Predio03>
        <Predio04></Predio04>

        <Predio >
          <div>
            <Janelas01 isActive01={isActive01} onClick={() => hadleActive(1)}></Janelas01>
            <Janelas02 isActive02={isActive02} onClick={() => hadleActive(2)}></Janelas02>

          </div>
          <div>
            <Janelas03 isActive03={isActive03} onClick={() => hadleActive(3)}></Janelas03>
            <Janelas04 isActive04={isActive04} onClick={() => hadleActive(4)}></Janelas04>

          </div>
        </Predio>
        <Predio02>
          <Janelas05 isActive05={isActive05} onClick={() => hadleActive(5)}></Janelas05>
        </Predio02>

      </>
    </>

  )
}
