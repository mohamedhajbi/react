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
        fetch(`https://3002-mohamedhajbi-react-asv2vz7yrir.ws-eu107.gitpod.io/etudiants`, {
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
        <div className="container mt-5">
        <div className="card mx-auto" style={{ maxWidth: "300px" }}>
            <div className="card-body">
                <h1 className="card-title text-center">Delete</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <input type="text" value={selectedId} onChange={handleSelectChange} className="form-control" placeholder="Enter ID" />
                    </div>
                    <button type="submit" onClick={refreshPage} className="btn btn-primary btn-block">Delete</button>
                </form>
            </div>
        </div>
        <App />
    </div>
    );
};
export default Supprimer;