import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import './Panier.css';

function Panier({ setPage, setId }) {
  const [panier, setPanier] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedPanier = JSON.parse(localStorage.getItem('panier')) || [];
    setPanier(storedPanier);
    setIsLoading(false);
  }, []);

  const calculerTotal = () => {
    return panier.reduce((total, produit) => {
      return total + (produit.prix * produit.quantite);
    }, 0);
  };

  const supprimerDuPanier = (id) => {
    const nouveauPanier = panier.filter(produit => produit.id !== id);
    setPanier(nouveauPanier);
    localStorage.setItem('panier', JSON.stringify(nouveauPanier));
  };

  const viderPanier = () => {
    setPanier([]);
    localStorage.setItem('panier', '[]');
  };

  if (isLoading) {
    return <div>Chargement du panier...</div>;
  }

  return (
    <>
    <NavBar setPage={setPage} setId={setId} />
    <div className="panier-page">

      <div className="panier-container">
        <h1>Your Cart</h1>

        {panier.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <div className="produits-panier">
              {panier.map((produit) => (
                <div key={produit.id} className="produit-panier">
                  <img src={produit.image} alt={produit.nom} className="produit-image" />
                  <div className="details-produit">
                    <h2>{produit.nom}</h2>
                    <p>Unit price: {produit.prix}$</p>
                    <p>Quantity: {produit.quantite}</p>
                    <button 
                      className="supprimer-btn" 
                      onClick={() => supprimerDuPanier(produit.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="total-panier">
              <h3>Total: {calculerTotal().toFixed(2)}€</h3>
            </div>

            <div className="actions-panier">
              <button className="continuer-achat" onClick={() => setPage('home')}>
                Continue my shopping
              </button>
              <button className="vider-panier" onClick={viderPanier}>
                Empty the cart
              </button>
              <button className="passer-commande" onClick={() => setPage('connexion')}>
                Proceed to checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
    </>
  );
}

export default Panier;