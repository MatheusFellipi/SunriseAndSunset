import React, { useState, useEffect } from 'react';
import {
  Janelas01, Janelas02, Janelas03, Janelas04, Janelas05, Janelas06,
  Janelas07, Janelas08, Janelas09, Janelas10, Janelas11, Janelas12
} from './styled'

function Janela({ isActive }) {
  const [isActive01, setIsActive01] = useState(false);
  const [isActive02, setIsActive02] = useState(false);
  const [isActive03, setIsActive03] = useState(false);
  const [isActive04, setIsActive04] = useState(false);
  const [isActive05, setIsActive05] = useState(false);
  const [isActive06, setIsActive06] = useState(false);
  const [isActive07, setIsActive07] = useState(false);
  const [isActive08, setIsActive08] = useState(false);
  const [isActive09, setIsActive09] = useState(false);
  const [isActive10, setIsActive10] = useState(false);
  const [isActive11, setIsActive11] = useState(false);
  const [isActive12, setIsActive12] = useState(false);

  useEffect(() => {
    if (isActive) {
      setIsActive01(false);
      setIsActive02(false);
      setIsActive03(false);
      setIsActive04(false);
      setIsActive05(false);
      setIsActive06(false);
      setIsActive07(false);
      setIsActive08(false);
      setIsActive09(false);
      setIsActive10(false);
      setIsActive11(false);
      setIsActive12(false);
    }
    if (!isActive) {
      setIsActive01(true);
      setIsActive02(true);
      setIsActive03(true);
      setIsActive04(true);
      setIsActive05(true);
      setIsActive06(true);
      setIsActive07(true);
      setIsActive08(true);
      setIsActive09(true);
      setIsActive10(true);
      setIsActive11(true);
      setIsActive12(true);
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
    if (id === 6) {
      if (isActive06)
        setIsActive06(false);
      if (!isActive06)
        setIsActive06(true);
    }
    if (id === 7) {
      if (isActive07)
        setIsActive07(false);
      if (!isActive07)
        setIsActive07(true);
    }
    if (id === 8) {
      if (isActive08)
        setIsActive08(false);
      if (!isActive08)
        setIsActive08(true);
    }
    if (id === 9) {
      if (isActive09)
        setIsActive09(false);
      if (!isActive09)
        setIsActive09(true);
    }
    if (id === 10) {
      if (isActive10)
        setIsActive10(false);
      if (!isActive10)
        setIsActive10(true);
    }
    if (id === 11) {
      if (isActive11)
        setIsActive11(false);
      if (!isActive11)
        setIsActive11(true);
    }
    if (id === 12) {
      if (isActive12)
        setIsActive12(false);
      if (!isActive12)
        setIsActive12(true);
    }
  }


  return (
    <>

      <Janelas01 isActive01={isActive01} onClick={() => hadleActive(1)}></Janelas01>
      <Janelas02 isActive02={isActive02} onClick={() => hadleActive(2)}></Janelas02>
      <Janelas03 isActive03={isActive03} onClick={() => hadleActive(3)}></Janelas03>
      <Janelas04 isActive04={isActive04} onClick={() => hadleActive(4)}></Janelas04>
      <Janelas05 isActive05={isActive05} onClick={() => hadleActive(5)}></Janelas05>
      <Janelas06 isActive06={isActive06} onClick={() => hadleActive(6)}></Janelas06>
      <Janelas07 isActive07={isActive07} onClick={() => hadleActive(7)}></Janelas07>
      <Janelas08 isActive08={isActive08} onClick={() => hadleActive(8)}></Janelas08>
      <Janelas09 isActive09={isActive09} onClick={() => hadleActive(9)}></Janelas09>
      <Janelas10 isActive10={isActive10} onClick={() => hadleActive(10)}></Janelas10>
      <Janelas11 isActive11={isActive11} onClick={() => hadleActive(11)}></Janelas11>
      <Janelas12 isActive12={isActive12} onClick={() => hadleActive(12)}></Janelas12>

    </>
  );
}

export default Janela;