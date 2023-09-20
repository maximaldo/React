import { useState, useEffect } from "react";
const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

function Pokemon() {
  const [data, setData] = useState([]);
  const [cadapokemon, setCadapokemon] = useState({
    nombre: "jano",
    imagen:
      "https://w7.pngwing.com/pngs/1000/411/png-transparent-mark-henry-wwe-raw-professional-wrestling-professional-wrestler-fat-man-professional-wrestling-sports-arm-thumbnail.png",
    id: -1,
  });

  useEffect(() => {
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((datos) => setData(datos.results));
  }, []);

  const HandleChange = (e) => {
    let filtrado = data.filter((i) => i.name === e.target.value);
    if (filtrado.length > 0) {
      let pokemonurl = filtrado[0].url;
      fetch(pokemonurl)
        .then((res) => res.json())
        .then((res) => {
          let pika = {
            nombre: res.name,
            id: res.id,
            imagen: res.sprites.other.dream_world.front_default,
          };
          setCadapokemon(pika);
          console.log(cadapokemon);
        });
    }
  };

  return (
    <div>
        <hr />
        <h1>Escribi algun pokemon</h1>
      <input onChange={HandleChange} />
      <h1>{cadapokemon.nombre}</h1>
      <img src={cadapokemon.imagen} alt="" />
    </div>
  );
}
export default Pokemon;
