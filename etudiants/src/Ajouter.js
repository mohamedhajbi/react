import { useState } from 'react';
function Ajouter() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    let msg = "";
    const handleInputChange1 = event => {
        setInputValue1(event.target.value);
    };
    const handleInputChange = event => {
        setInputValue(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://3002-mohamedhajbi-react-qexjrgp3q80.ws-eu107.gitpod.io/etudiants`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lastname: inputValue, firstname: inputValue1 }),
        })
            .then(response => response.json())
            .then(updatedData => {
                setInputValue('');
                setInputValue1('')
                msg = inputValue +" "+inputValue1 + "ajouter"
            })
            .catch(error =>{ console.error('Error Ajout etudiant:', error)
            msg = "Error Ajout etudiant"
        });
    };
    
    return (
        <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#444', marginBottom: '20px' }}>Ajout </h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="New Name" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                <input type="text" value={inputValue1} onChange={handleInputChange1} placeholder="New firstname" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}> ADD </button>
            </form>
            <p>{msg}</p>
        </div>

    );
};
export default Ajouter;