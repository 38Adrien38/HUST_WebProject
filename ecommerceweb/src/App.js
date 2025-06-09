// src/App.js
import React, { useState } from 'react'; // Ajoutez useState ici
import './App.css';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import CreerCompte from './pages/CreerCompte';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import ProduitCategorie from './pages/ProduitCategorie';
import { PanierProvider } from './context/PanierContext';
function App() {
  const [page, setPage] = useState('home');
  const [id, setId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <PanierProvider>
      <div className="App">
        {page === 'home' && <Home setPage={setPage} setId={setId} setSelectedCategory={setSelectedCategory} />}
        {page === 'connexion' && <Connexion setPage={setPage} setId={setId} setSelectedCategory={setSelectedCategory} />}
        {page === 'creerCompte' && <CreerCompte setPage={setPage} setId={setId} setSelectedCategory={setSelectedCategory} />}
        {page === 'produit' && <Produit setPage={setPage} id={id} setId={setId} setSelectedCategory={setSelectedCategory} />}
        {page === 'panier' && <Panier setPage={setPage} setId={setId} setSelectedCategory={setSelectedCategory} />}
        {page === 'produitCategorie' && (
          <ProduitCategorie setPage={setPage} id={id} setId={setId} setSelectedCategory={setSelectedCategory} />
        )}
      </div>
    </PanierProvider>
  );
}

export default App;