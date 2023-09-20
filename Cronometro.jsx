import { useState } from "react";

function Cronometro() {
  const [tiempo, setTiempo] = useState(0);
  const [stop, setStop] = useState(undefined);

  function HandleClick() {
    if (stop) {
      clearInterval(stop);
      setStop(undefined);
    } else {
      const idIntervalo = setInterval(() => setTiempo(t => t + 1), 10);
      setStop(idIntervalo);
    }
  }

  const cs = tiempo % 100;
  const segundos = Math.floor(tiempo / 100) % 60;
  const min = Math.floor(tiempo / 6000) % 60;

  return (
    <>
    <hr />
      <button onClick={HandleClick}>{stop ? "Parar" : "Iniciar"}</button>
      <button onClick={() => setTiempo(0)}>reset</button>
      <h1>{min.toString().padStart(2,0)}:{segundos.toString().padStart(2,0)}:{cs.toString().padStart(2,0)}</h1>
    </>
  );
}
export default Cronometro;
