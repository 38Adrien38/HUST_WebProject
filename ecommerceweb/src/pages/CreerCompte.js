import React from 'react';
import NavBar from '../components/NavBar';


function CreerCompte({ setPage, setId }) {
    return (
        <div className="CreerCompte">
            <h1>Page CreerCompte</h1>
            <NavBar setPage={setPage} setId={setId} />

        </div>
    );
}

export default CreerCompte;