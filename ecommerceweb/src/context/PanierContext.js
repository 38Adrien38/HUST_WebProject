import React, { createContext, useState, useEffect } from 'react';

export const PanierContext = createContext();

export const PanierProvider = ({ children }) => {
  const getInitialPanier = () => {
    try {
      const stored = localStorage.getItem('panier');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      console.error("Error during the initial loading of the cart:", e);
      return [];
    }
  };

  const [panier, setPanier] = useState(getInitialPanier);

  useEffect(() => {
    localStorage.setItem('panier', JSON.stringify(panier));
  }, [panier]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'panier') {
        try {
          const newPanier = JSON.parse(e.newValue || '[]');
          setPanier(newPanier);
        } catch (err) {
          console.error('Error while reloading from storage:', err);
          setPanier([]);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const ajouterAuPanier = (produit) => {
    setPanier(prev => {
      const existing = prev.find(p => p.id === produit.id);
      return existing
        ? prev.map(p => 
            p.id === produit.id 
              ? { ...p, quantite: p.quantite + produit.quantite } 
              : p
          )
        : [...prev, produit];
    });
  };

  const supprimerDuPanier = (id) => {
    setPanier(prev => prev.filter(p => p.id !== id));
  };

  const viderPanier = () => {
    setPanier([]);
  };

  const calculerTotal = () => {
    return panier.reduce((total, produit) => {
    return total + (produit.prix * produit.quantite);
  }, 0);
  };

  return (
    <PanierContext.Provider
      value={{
        panier,
        ajouterAuPanier,
        supprimerDuPanier,
        viderPanier,
        calculerTotal
      }}
    >
      {children}
    </PanierContext.Provider>
  );
};
