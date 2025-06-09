import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import './AfficherProduit.css';

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
                        <p>Name of the product : {product.nom}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AfficherProduit;
