import { useState } from "react";

function Divisao() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState("");

  function divisao() {
    if (Number(numero2) === 0) {
      setErro("Não é possível dividir por zero");
      setResultado(null);
      return;
    }

    setErro("");
    setResultado(Number(numero1) / Number(numero2));
  }

  return (
    <div>
      <h2>Divisão</h2>

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

      <button onClick={divisao}>Dividir</button>

      {erro && <p>{erro}</p>}

      {resultado !== null && <p>Resultado: {resultado}</p>}
    </div>
  );
}

export default Divisao;