function Tabla(props) {
  const encabezado = Object.keys(props.a[1]);

  return (
    <>
    <hr />
    <h1>TABLA</h1>
    <table>
      <thead>
        <tr>
          {encabezado.map((cabeza, indice) => (
            <th key={indice}>{cabeza}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.a.map((filas, i) => (
          <tr key={i}>
            {encabezado.map((valor, i) => (
              <td key={i}>{filas[valor]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    </>
  );
}

export default Tabla;
