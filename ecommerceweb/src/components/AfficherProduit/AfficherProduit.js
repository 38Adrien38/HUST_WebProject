// src/App.js
import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';

function AfficherProduit() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch data from API
        getProducts()
            .then((response) => {
                setProducts(response.data); // Store products in state
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });
    }, []); // Empty dependency array means this runs once when the component mounts

    return (
        console.log(products),
        <div style={{ padding: '20px' }}>
            <h1>Product List</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <p> Nom du produit: {product.nom} </p>
                    </li>


                ))}
            </ul>
        </div>
    );
}

export default AfficherProduit;
