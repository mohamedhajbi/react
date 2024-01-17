import { useState } from "react";

function Calculatrice() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [Sm, setSomme] = useState("");
  const [Pr, setProduit] = useState("");
  const [showResult, setShowResult] = useState(false);

  const handleNum1Change = (event) => {
    setNum1(parseFloat(event.target.value));
  };

  const handleNum2Change = (event) => {
    setNum2(parseFloat(event.target.value));
  };

  const Calculer = (event) => {
    event.preventDefault();
    setSomme(num1 + num2);
    setProduit(num1 * num2);
    setShowResult(true);
  };

  const Reinitialiser = () => {
    setShowResult(false);
    setNum1("");
    setNum2("");
    setSomme("");
    setProduit("");
  };

  return (
    <div>
      {showResult ? (
        // Rendu 2 (résultat)
        <div>
          <p>Résultat de la somme : {Sm}</p>
          <p>Résultat du produit : {Pr}</p>
          <button onClick={Reinitialiser} className="btn btn_primary btn_lg">
            Refaire
          </button>
        </div>
      ) : (
        // Rendu 1 (formulaire)
        <form onSubmit={Calculer}>
          <div>
            <p>Nombre 1</p>
            <input
              type="number"
              name="nombre1"
              value={num1}
              onChange={handleNum1Change}
            />
            <p>Nombre 2</p>
            <input
              type="number"
              name="nombre2"
              value={num2}
              onChange={handleNum2Change}
            />
          </div>{" "}
          <br />
          <button type="submit" className="btn btn_primary btn_lg">
            Calculer
          </button>
        </form>
      )}
    </div>
  );
}

export default Calculatrice;