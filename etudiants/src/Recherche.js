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
     
     if ( data == '') {
        return <h1>il n'ya pas d'etudiant</h1>
      }
    return (
      <div className="App">
       <ul>
      
          <li>{data.name}</li>
  
       </ul>
      </div>
    );
  }

export default Recherche