import Soma from "./Soma";
import Subtracao from "./Subtracao";
import Multiplicacao from "./Multiplicacao";
import Divisao from "./Divisao";

function Calculadora() {
  return (
    <div>
      <h1>Calculadora</h1>

      <Soma />

      <Subtracao />

      <Multiplicacao />

      <Divisao />
    </div>
  );
}

export default Calculadora;
