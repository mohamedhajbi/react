import { useState } from 'react';
function Modifier() {
    const [inputValue, setInputValue] = useState('');
    const [selectedId, setSelectedId] = useState('');
    const [inputValue1, setInputValue1] = useState('');

    const handleInputChange1 = event => {
        setInputValue1(event.target.value);
    };
    const handleInputChange = event => {
        setInputValue(event.target.value);
    };
    const handleSelectChange = event => {
        setSelectedId(event.target.value);
    };
    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://3002-mohamedhajbi-react-dwtf3ex98ro.ws-eu107.gitpod.io/etudiants/${selectedId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lastname: inputValue, firstname: inputValue1 }),
        })
            .then(response => response.json())
            .then(updatedData => {
                setInputValue('');
                setSelectedId('');
                setInputValue1('')
            })
            .catch(error => console.error('Error updating data:', error));
    };
    return (
        <div style={{ margin: '0 auto', width: '300px', textAlign: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
            <h1 style={{ color: '#444', marginBottom: '20px' }}>UPDDATE STUDENT INFORMATIONS </h1>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <input type="text" value={selectedId} onChange={handleSelectChange} style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                <input type="text" value={inputValue} onChange={handleInputChange} placeholder="New Name" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                <input type="text" value={inputValue1} onChange={handleInputChange1} placeholder="New firstname" style={{ padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                <button type="submit" style={{ padding: '10px 15px', border: 'none', borderRadius: '4px', backgroundColor: '#007bff', color: 'white', cursor: 'pointer' }}>Update Data</button>
            </form>
        </div>

    );
};
export default Modifier;
