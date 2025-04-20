import React from 'react';
import NavBar from '../components/NavBar';



function Panier({ setPage, setSelectedCategory }) {
    return (
        <div className="Panier">
            <h1>Page panier</h1>
            <NavBar setPage={setPage} setSelectedCategory={setSelectedCategory} />
        </div>
    );
}

export default Panier;