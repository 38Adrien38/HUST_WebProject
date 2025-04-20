import React, { useState } from 'react';
import './App.css';
import Home from './pages/Home';
import Connexion from './pages/Connexion';
import CreerCompte from './pages/CreerCompte';
import Produit from './pages/Produit';
import Panier from './pages/Panier';
import ProduitCategorie from './pages/ProduitCategorie';


function App() {
  const [page, setPage] = useState('home');
  const [id, setId] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="App">
      {page === 'home' && <Home setPage={setPage} setId={setId} setSelectedCategory={setSelectedCategory} />}
      {page === 'connexion' && <Connexion setPage={setPage} setSelectedCategory={setSelectedCategory} />}
      {page === 'creerCompte' && <CreerCompte setPage={setPage} setSelectedCategory={setSelectedCategory} />}
      {page === 'produit' && <Produit setPage={setPage} id={id} setSelectedCategory={setSelectedCategory} />}
      {page === 'panier' && <Panier setPage={setPage} setSelectedCategory={setSelectedCategory} />}
      {page === 'produitCategorie' && (
        <ProduitCategorie setPage={setPage} id={id} setId={setId} setSelectedCategory={setSelectedCategory} />
      )}
    </div>
  );
}


export default App;
