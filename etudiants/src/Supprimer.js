import { useState } from 'react';
import App from './App';
function Supprimer() {
  
    const [selectedId, setSelectedId] = useState('');

    let msg = "";
    const [data, setData] = useState([]);

    const handleSelectChange = event => {
        setSelectedId(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://3002-mohamedhajbi-react-qexjrgp3q80.ws-eu107.gitpod.io/etudiants`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id : selectedId }),
        })
            .then(response => response.json())
            .then(updatedData => {
                setSelectedId('');
                msg = selectedId + "deleted";
            })
            .catch(error =>{ console.error('Error Ajout etudiant:', error)
            msg = "Error Ajout etudiant"
        });
    };
    function refreshPage() {
        window.location.reload(true);
      }
    

    return (
        <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#444', marginBottom: '20px' }}>Delete </h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                 <input type="text" value={selectedId} onChange={handleSelectChange} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />

                <button type="submit" onClick={refreshPage} style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}> Delete </button>
            </form>
            <App />
        </div>
    );
};
export default Supprimer;