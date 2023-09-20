import { useState } from "react";

function Tareas() {
  const [lista, setLista] = useState([]);
  const [tarea, setTarea] = useState("");

  function HandleSubmit(e) {
    e.preventDefault();
    setLista([...lista, {nombre : tarea, id: lista.length }]);
    setTarea("");
  }

  function HandleChange(e) {
    setTarea(e.target.value);
  }
  const Delete = (elim) =>{
     console.log(elim.id);
    let jano = lista.filter(i => i.id !== elim.id)
    setLista(jano)

  }
  return (
    <>
    <hr />
    <h1>LISTA DE TAREAS</h1>
      <form onSubmit={HandleSubmit}>
        <input onChange={HandleChange} value={tarea}/>
        <input type="submit"/>
      </form>
      <ul>
        {lista.map((tareas) =>{
            return(<div>
          <li key={tareas.id}>{tareas.nombre}</li>
          <button onClick={() => Delete(tareas)}>Eliminar tarea</button>
          </div>
          
        ) })}
      </ul>
    </>
  );
}
export default Tareas;
