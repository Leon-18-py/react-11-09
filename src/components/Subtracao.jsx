import { useState } from "react";

function Subtracao() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  function subtracao() {
    setResultado(Number(numero1) - Number(numero2));
  }

  return (
    <div>
      <h2>Subtração</h2>

      <input
        type="number"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        type="number"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <button onClick={subtracao}>Subtrair</button>

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Subtracao;