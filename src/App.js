import { useEffect, useState } from 'react'
import { Home } from './pages'
import api from './services/api'

function App() {
  const [data, setData] = useState('');
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const [solarNoon, setSolarNoon] = useState()
  const [isDiaNoite, setIsDiaNoite] = useState();

  useEffect(() => {
    api.get(`json?lat= ${latitude} &lng= ${longitude}`).then(response => {
      const data = response.data;
      setSolarNoon(data.results.solar_noon);

      setData(data);
    });
    console.log(solarNoon);
  }, [longitude]);

  console.log(data);
  useEffect(() => {
    let hora = [];

    if (data) {
      hora = solarNoon.split('');
    }
    console.log(hora);
    for (let i = 0; i < hora.length; i++) {
      const element = hora[i];

      if (element == "P") {
        setIsDiaNoite(true);
      } if (element == "A") {
        setIsDiaNoite(false);
      }
    }
    console.log(isDiaNoite);
  }, [data]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(location => {
      setLatitude(location.coords.longitude);
      setLongitude(location.coords.longitude);
    })
  }, []);

  return (
    <>
      <Home isDiaNoite={isDiaNoite} />
    </>
  );
}

export default App;
