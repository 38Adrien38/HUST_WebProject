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
  const [id, setId] = useState(''); // This will store the category name

  return (
    <div className="App">
      {page === 'home' && <Home setPage={setPage} setId={setId} />}
      {page === 'connexion' && <Connexion setPage={setPage} />}
      {page === 'creerCompte' && <CreerCompte setPage={setPage} />}
      {page === 'produit' && <Produit setPage={setPage} id={id} />}
      {page === 'panier' && <Panier setPage={setPage} />}
      {page === 'produitCategorie' && (
        <ProduitCategorie setPage={setPage} id={id} setId={setId} />
      )}
    </div>
  );
}


export default App;
