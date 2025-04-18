import React from 'react';
import NavBar from '../components/NavBar';
import Tendance from '../components/Tendance';
import Categorie from '../components/Categorie';


function Home({ setPage, setId }) {
    return (
        <div className="Home">
            <NavBar setPage={setPage} />
            <h1>Home Page</h1>
            <p>Site banner or image here</p>
            <Tendance setPage={setPage} setId={setId} />
            <Categorie setPage={setPage} setSelectedCategory={setId} />
        </div>
    );
}

export default Home;
