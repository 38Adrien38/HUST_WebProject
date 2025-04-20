import React from 'react';
import NavBar from '../components/NavBar';


function CreerCompte({ setPage, setSelectedCategory }) {
    return (
        <div className="CreerCompte">
            <h1>Page CreerCompte</h1>
            <NavBar setPage={setPage} setSelectedCategory={setSelectedCategory} />

        </div>
    );
}

export default CreerCompte;