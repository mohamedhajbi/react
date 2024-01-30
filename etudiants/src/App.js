import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('https://3002-mohamedhajbi-react-qexjrgp3q80.ws-eu107.gitpod.io/etudiants')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
  }, []);
  console.log(data);

  return (
    <div className="App">
      <h1>Le nombre d'étudiants est : {data.length}</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.lastname} {item.firstname}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
