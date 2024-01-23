import { useState, useEffect } from 'react'; 

function App() {
  const [data, setData] = useState([]); 
  useEffect(() => {
    fetch('https://3001-mohamedhajbi-react-7uc6t49k2z3.ws-eu107.gitpod.io/Etudiants')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Erreur :', error));
    }, []); 
   console.log(data);
  return (
    <div className="App">
      <h1>le nbrs de etufiants est : {data.length}</h1>
     <ul>
      {data.map(item => (
        <li key={item.id}>{item.name}</li>
      ))}
     </ul>
    </div>
  );
}

export default App;
