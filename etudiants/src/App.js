import React, { useState, useEffect } from 'react';
import jsPDF from 'jspdf';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://3002-mohamedhajbi-react-asv2vz7yrir.ws-eu107.gitpod.io/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, []);
  console.log(data);
  const printpdf = () => {
    const doc = new jsPDF();
    let y=10;
    doc.text("Liste des etudaint", 30, y);
    y+=10;
    data.forEach(item => {
      doc.text(`ID : ${item.id}, nom : ${item.firstname}, perom : ${item.lastname}, ville : ${item.ville}`,10,y);
      y += 10;
    });
    doc.save("list_etudiants.pdf");
  };
  return (
  
   <div className="App">
    <h1 className='text-center'>List d'etudiants</h1>
  <table className='table table-striped mt-3'>
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">prenom</th>
        <th scope="col">nom</th>
        <th scope="col">ville</th>
      </tr>
    </thead>
    <tbody>
      {data.map(item => (
        <tr key={item.id}>
          <th scope="row">{item.id}</th>
          <td>{item.lastname}</td>
          <td>{item.firstname}</td>
          <td>{item.ville}</td>
        </tr>
      ))}
    </tbody>
  </table>
  <button onClick={printpdf} className='btn btn-danger ms-3'>Imprimer PDF</button>

</div>

  );
}

export default App;
