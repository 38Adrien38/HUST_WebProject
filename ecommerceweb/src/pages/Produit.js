import React, { useEffect, useState } from 'react';
import { getProductById } from '../services/api';
import NavBar from '../components/NavBar';

function Produit({ setPage, id, setSelectedCategory }) {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        getProductById(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => console.error('Error fetching product:', err));
    }, [id]);

    if (!product) {
        return <div>Loading product...</div>;
    }

    return (
        <div className="produit-page">
            <NavBar setPage={setPage} setSelectedCategory={setSelectedCategory} />

            <div className="produit-details">

                <h1>{product.nom}</h1>
                <img src={product.image} alt={product.nom} className="produit-image" />
                <p><strong>Price:</strong> {product.prix} €</p>
                <p><strong>Description:</strong> {product.description}</p>
            </div>
        </div>
    );
}

export default Produit;
