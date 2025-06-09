// src/pages/Produit.js
import React, { useEffect, useState, useContext } from 'react';
import { getProductById } from '../services/api';
import NavBar from '../components/NavBar';
import './Produit.css';
import { PanierContext } from '../context/PanierContext';

function Produit({ setPage, id, setId }) {
  const [product, setProduct] = useState(null);
  const [quantite, setQuantite] = useState(1);
  const { ajouterAuPanier } = useContext(PanierContext);

  useEffect(() => {
    getProductById(id)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => console.error('Error fetching product:', err));
  }, [id]);

  const handleAjouterAuPanier = () => {
    if (!product) return;
    
    ajouterAuPanier({
      id: product.id,
      nom: product.nom,
      prix: product.prix,
      quantite: quantite,
      image: product.image,
    });
    
    alert(`${product.nom} has been added to the cart!`);
  };

  if (!product) {
    return <div>Loading the product...</div>;
  }

  return (
    <>
      <NavBar setPage={setPage} setId={setId} />
      <div className="produit-page">
        <div className="produit-details">
          <h1>{product.nom}</h1>
          <img src={product.image} alt={product.nom} className="produit-image" />
          <p><strong>Prix:</strong> {product.prix} €</p>
          <p><strong>Description:</strong> {product.description}</p>

          <div className="quantite-container">
            <button onClick={() => setQuantite(Math.max(1, quantite - 1))}>-</button>
            <input
              type="number"
              value={quantite}
              min="1"
              onChange={(e) => setQuantite(Math.max(1, Number(e.target.value)))}
            />
            <button onClick={() => setQuantite(quantite + 1)}>+</button>
          </div>

          <button className="ajouter-panier-btn" onClick={handleAjouterAuPanier}>
            Add to the cart
          </button>
        </div>
      </div>
    </>
  );
}

export default Produit;