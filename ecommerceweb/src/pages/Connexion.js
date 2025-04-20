import React from 'react';
import NavBar from '../components/NavBar'

function Connexion({ setPage, setSelectedCategory }) {
    return (
        <div className="Connexion">
            <NavBar setPage={setPage} setSelectedCategory={setSelectedCategory} />
            <h1>Page Connexion</h1>
        </div>
    );
}

export default Connexion;