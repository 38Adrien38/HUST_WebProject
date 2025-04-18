import React from 'react';
import './NavBar.css';
import NavLink from '../NavLink';

function NavBar({ setPage }) {
    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <img src="./carrefour.jpg" alt="Logo" className="logo-img" />
            </a>
            <select name="pets" id="pet-select">
                <option value="">--Please choose an option--</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="hamster">Hamster</option>
                <option value="parrot">Parrot</option>
                <option value="spider">Spider</option>
                <option value="goldfish">Goldfish</option>
            </select>
            <input type="text" placeholder="Search.."></input>
            <NavLink onClick={() => setPage('connexion')} text="Connexion" />
            <NavLink onClick={() => setPage('panier')} text="Panier" />
        </nav>
    );
}
export default NavBar;