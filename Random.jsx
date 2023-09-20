import { useState } from "react";

function Random() {
  const [rand, setRand] = useState(1);
  const jano = () => setRand(Math.floor(Math.random() * 1000 + 1));

  return <h1 onClick={jano}>{rand}</h1>;
}
export default Random;
