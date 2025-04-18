import React from 'react';
import NavBar from '../components/NavBar';



function Panier({ setPage }) {
    return (
        <div className="Panier">
            <h1>Page panier</h1>
            <NavBar setPage={setPage} />
        </div>
    );
}

export default Panier;