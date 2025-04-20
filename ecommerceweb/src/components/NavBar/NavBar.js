import React from 'react';
import './NavBar.css';
import NavLink from '../NavLink';
import CategorieDropdown from '../CategorieDropdown';

function NavBar({ setPage, setSelectedCategory }) {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <img src="./carrefour.jpg" alt="Logo" className="logo-img" />
            </a>
            <CategorieDropdown setPage={setPage} setSelectedCategory={setSelectedCategory} />
            <input type="text" placeholder="Search.."></input>
            <NavLink onClick={() => setPage('connexion')} text="Connexion" />
            <NavLink onClick={() => setPage('panier')} text="Panier" />
        </nav>
    );
}
export default NavBar;