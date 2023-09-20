function Navegacion() {
  const links = [
    {
      url: "https://tracker.gg/valorant/profile/riot/maldinho%23jano/overview",
      nombre: "maldo",
    },
    {
      url: "https://tracker.gg/valorant/profile/riot/Tukinha%23MARRA/overview",
      nombre: "Francomon14",
    },
    {
      url: "https://tracker.gg/valorant/profile/riot/mukzik%20Lc%2324806/overview",
      nombre: "Fuertes el botacho",
    },
    {
      url: "https://tracker.gg/valorant/profile/riot/akuma%23lvgod/overview",
      nombre: "Mati moño el pollera",
    },
  ];

  return (
    <nav>
      <h1>Jugadores de valorant</h1>
      <ul>
        {links.map((objeto, i) => (
          <li key={i}>
            <a href={objeto.url}>{objeto.nombre}</a>{" "}
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default Navegacion;
