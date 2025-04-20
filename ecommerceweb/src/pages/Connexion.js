import React from 'react';
import NavBar from '../components/NavBar'

function Connexion({ setPage, setId }) {
    return (
        <div className="Connexion">
            <NavBar setPage={setPage} setId={setId} />
            <h1>Page Connexion</h1>
        </div>
    );
}

export default Connexion;