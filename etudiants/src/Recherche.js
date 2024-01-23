import { useState, useEffect } from 'react'; 
import { useParams } from 'react-router-dom';
function Recherche() {
    const [data, setData] = useState(''); 
    const {id} = useParams();
    useEffect(() => {
      fetch(`https://3001-mohamedhajbi-react-7uc6t49k2z3.ws-eu107.gitpod.io/Etudiants/${id}`)
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Erreur :', error));
      }, []); 
     console.log(data);
    return (
      <div className="App">
       <ul>
        
          <li key={data.id}>{data.name}</li>
  
       </ul>
      </div>
    );
  }

export default Recherche