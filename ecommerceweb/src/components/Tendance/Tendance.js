import React, { useEffect, useState } from 'react';
import { getProducts } from '../../services/api';
import './Tendance.css';

function Tendance({ setPage, setId }) {
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

    const handleClick = (productId) => {
        setId(productId);
        setPage('produit');
    };

    return (
        <div>
            <h2>Trending Products</h2>
            <ul className="tendance-list">
                {products.slice(0, 3).map((product) => (
                    <li key={product.id} onClick={() => handleClick(product.id)} className="tendance-item">
                        <p>{product.nom}</p>
                        <img src={product.image} alt={product.nom} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Tendance;
