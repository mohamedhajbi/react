import { useState, useEffect } from 'react'; 

function Classes() {
  const [data, setData] = useState([]); 
  
  useEffect(() => {
    fetch('https://3001-mohamedhajbi-react-p9y8qxfo6p9.ws-eu107.gitpod.io/Groupe')
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error('Erreur :', error));
    }, []); 
   console.log(data);
  return (
    <div className="App">
      <h1>le nbrs de Groupe est : {data.length}</h1>
     <ul>
      {data.map(item => (
        <li key={item.id}>{item.libelle}</li>
      ))}
     </ul>
    </div>
  );
}

export default Classes;
