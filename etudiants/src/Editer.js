import { useState } from 'react';
import { useParams } from 'react-router-dom';
function Editer() {
    const [inputValue, setInputValue] = useState('');
    const [inputValue1, setInputValue1] = useState('');
    const{id} = useParams();
    const handleInputChange1 = event => {
        setInputValue1(event.target.value);
    };
    const handleInputChange = event => {
        setInputValue(event.target.value);
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        fetch(`https://3001-mohamedhajbi-react-bb9flw85l0i.ws-eu107.gitpod.io/Etudiants/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ lastname: inputValue, firstname: inputValue1 }),
        })
            .then(response => response.json())
            .then(updatedData => {
                setInputValue('');
                setInputValue1('')
            })
            .catch(error => console.error('Error updating data:', error));
    };
    return (
        <div className="container mt-5">
            <div className="card mx-auto" style={{ maxWidth: "300px" }}>
                <div className="card-body">
                    <h1 className="card-title text-center">Update</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <input type="text" value={id} className="form-control" disabled />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={inputValue} onChange={handleInputChange} placeholder="New Name" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <input type="text" value={inputValue1} onChange={handleInputChange1} placeholder="New Firstname" className="form-control" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-block">Update Data</button>
                    </form>
                </div>
            </div>
        </div>

    );
};
export default Editer;
