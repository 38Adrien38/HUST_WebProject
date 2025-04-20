import React from 'react';
import NavBar from '../components/NavBar';



function Panier({ setPage, setId }) {
    return (
        <div className="Panier">
            <h1>Page panier</h1>
            <NavBar setPage={setPage} setId={setId} />
        </div>
    );
}

export default Panier;