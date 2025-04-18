import React from 'react';
import NavBar from '../components/NavBar'

function Connexion({ setPage }) {
    return (
        <div className="Connexion">
            <NavBar setPage={setPage} />
            <h1>Page Connexion</h1>
        </div>
    );
}

export default Connexion;