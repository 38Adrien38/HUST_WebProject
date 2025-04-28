import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import './AfficherProduit.css'; // Ajoute l'import

function AfficherProduit() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts()
            .then((response) => {
                setProducts(response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div className="afficher-produit-container">
            <h1>Product List</h1>
            <ul className="afficher-produit-list">
                {products.map((product) => (
                    <li key={product.id} className="afficher-produit-item">
                        <p>Nom du produit : {product.nom}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AfficherProduit;
