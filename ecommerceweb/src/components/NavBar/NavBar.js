import React, { useState } from 'react';
import './NavBar.css';
import NavLink from '../NavLink';
import CategorieDropdown from '../CategorieDropdown';
import { getProducts } from '../../services/api';

function NavBar({ setPage, setId }) {
    const [searchInput, setSearchInput] = useState('');

    const handleSearch = async (e) => {
        if (e.key === 'Enter' && searchInput.trim() !== '') {
            try {
                const result = await getProducts();
                const products = Array.isArray(result)
                    ? result
                    : Array.isArray(result.data)
                        ? result.data
                        : [];

                const matched = products.find((product) =>
                    product.nom.toLowerCase().includes(searchInput.toLowerCase())
                );

                if (matched) {
                    setId(matched.id);
                    setPage('produit');
                } else {
                    alert('No product found');
                }
            } catch (error) {
                console.error('Error during the research:', error);
            }
        }
    };

    return (
        <nav className="navbar">
            <a href="/" className="logo">
                <img src="./carrefour.jpg" alt="Logo" className="logo-img" />
            </a>
            <CategorieDropdown setPage={setPage} setId={setId} />
            <input
                type="text"
                placeholder="Search a product..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                onKeyDown={handleSearch}
                className="search-input"
            />
            <NavLink onClick={() => setPage('connexion')} text="Connexion" />
            <NavLink onClick={() => setPage('panier')} text="Cart" />
        </nav>
    );
}

export default NavBar;
