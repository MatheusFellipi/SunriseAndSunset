import { useEffect, useState } from 'react'
import { Home } from './pages'
import { ThemeProvider } from 'styled-components'

import dia from './theme/dia'
import noite from './theme/noite'

import api from './services/api'


function App() {
  const [theme, setTheme] = useState(dia);

  const [data, setData] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [sunset, setSunset] = useState('');
  const [isDiaNoite, setIsDiaNoite] = useState();

  let timestamp = new Date();
  let horaAtual = timestamp.getHours()

  useEffect(() => {
    if (data) {
      let sunsetHoraSeparar = sunset.split('T'); // results: separar a string no 'T' em dois  ["2021-02-11", "22:41:14+00:00"]
      let formatHoraSunset = sunsetHoraSeparar[1];
      let sunsetHoras = formatHoraSunset.split(':') // results: serapara a string no ':'  ["22" "41" "14+00" "00"]

      /*
       eu usei a senset(pôr do sol) para fazer a verifiçao 
       com a hora atual do Sistema operacional
      */
      //pôr do sol
      if (horaAtual >= sunsetHoras[0]) { //noite
        setIsDiaNoite(true);
        setTheme(noite);
      }
      else if (horaAtual <= sunsetHoras[0]) { //dia
        setIsDiaNoite(false);
        setTheme(dia);

      }
    }
  }, [data])

  useEffect(() => {
    api.get(`json?lat= ${latitude} &lng= ${longitude} &formatted=0`).then(response => {
      const data = response.data;
      setSunset(data.results.sunset);
      setData(data);
    });
  }, [longitude]);


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      setLatitude(location.coords.longitude);
      setLongitude(location.coords.longitude);
    })
  }, []);

  return (
    <>
      <ThemeProvider theme={theme} >
        <Home isDiaNoite={isDiaNoite} />

      </ThemeProvider>
    </>
  );
}

export default App;
