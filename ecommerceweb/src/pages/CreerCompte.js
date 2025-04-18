import React from 'react';
import NavBar from '../components/NavBar';


function CreerCompte({ setPage }) {
    return (
        <div className="CreerCompte">
            <h1>Page CreerCompte</h1>
            <NavBar setPage={setPage} />

        </div>
    );
}

export default CreerCompte;