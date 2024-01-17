import { useState } from "react"; 

function Calculatrice(){
    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [Sm, setSomme] = useState("");
    const [Pr, setProduit] = useState("");
    const handleNum1Change = (event) => {
        setNum1(parseFloat(event.target.value));
      }
    
      const handleNum2Change = (event) => {
        setNum2(parseFloat(event.target.value));
      }
      function Calculer(event) {
        event.preventDefault();
        setSomme(num1+num2);
        setProduit(num1*num2);
        setNum1("");
        setNum2("");
        

      }
    return (
        <form onSubmit={Calculer}>
            <div>
                <p>Nombre 1</p>
                <input type="number" name="nombre1" value={num1} onChange={handleNum1Change}></input>
                <p>Nombre 2</p>
                <input type="number" name="nombre2" value={num2} onChange={handleNum2Change}></input>
                <p>Somme :</p>
                <input type="text" id="Somme" value={Sm}></input>
                <p>Produit :</p>
                <input type="text" id="Produit" value={Pr}></input>
            </div> <br />
            <button type="submit" className="btn btn__primary btn__lg">
                Calculer
            </button>
        </form>
    )
}
export default Calculatrice;