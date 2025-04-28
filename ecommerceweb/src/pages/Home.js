import React from 'react';
import NavBar from '../components/NavBar';
import Tendance from '../components/Tendance';
import Categorie from '../components/Categorie';


function Home({ setPage, setId }) {
    return (
        <div className="Home">
            <NavBar setPage={setPage} setId={setId} />
            <img src="./banner.jpg" alt="Bannière eShop" className="home-banner" />
            <Tendance setPage={setPage} setId={setId} />
            <Categorie setPage={setPage} setSelectedCategory={setId} />
        </div>
    );
}

export default Home;
