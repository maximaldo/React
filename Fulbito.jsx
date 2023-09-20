import { useState } from "react";

function Fulbito() {
  const equiposFutbol = [
    "Real Madrid",
    "FC Barcelona",
    "Manchester United",
    "Liverpool FC",
    "Juventus FC",
    "AC Milan",
    "Bayern de Múnich",
    "Borussia Dortmund",
    "Paris Saint-Germain",
    "Chelsea FC",
    "Arsenal FC",
    "Inter de Milán",
    "AS Roma",
    "Manchester City",
    "Tottenham Hotspur",
    "Atletico de Madrid",
    "Boca Juniors",
    "River Plate",
    "Ajax",
    "Feyenoord",
    "Santos FC",
    "Flamengo",
    "Sao Paulo FC",
    "Benfica",
    "Porto",
    "Celtic FC",
    "Rangers FC",
    "Sevilla FC",
    "Valencia CF",
    "Napoli"
  ];

  const [filtro, setFiltro] = useState(equiposFutbol);

  function HandleChange(e) {
    e.preventDefault();
    console.log(e.target.value)
    let filtrado = equiposFutbol.filter(cadaEquipo=>{
    let equipo = cadaEquipo.toLowerCase();
    let busqueda = e.target.value.toLowerCase();
    if(equipo.startsWith(busqueda)) return true;
    else return false;
    });
    setFiltro(filtrado);
    }

  return (
    <>
    <hr />
    <h1>Escribi tu equipo de futbol</h1>
      <input onChange={HandleChange}/>
      <ul>{filtro.map(i => <li key={i}>{i}</li> )}</ul>
    </>
  );
}
export default Fulbito;






/*const [busqueda, setBusqueda] = useState('');
  const [filtro, setFiltro] = useState(equiposFutbol);

  const HandleChange = (e) => {
    console.log(busqueda);
    let filtrador = equiposFutbol.filter(cadaEquipo => {
      let equipo = cadaEquipo.toLowerCase();
      let palabra = e.target.value.toLowerCase();
      if(equipo.startsWith(palabra)) return cadaEquipo;
      else return null;
    });
    setFiltro(filtrador);
  };

  return (
    <>
  <input onChange={HandleChange}/>
  <ul>
  {filtro.map((i) => <li key={i}>{i}</li>)} 
  </ul>
  </>
  )*/
