// src/services/api.js
import axios from 'axios';

const API_PRODUCT = 'http://localhost:5221/api/produit'; // Replace with your API endpoint
const API_CLIENT = 'http://localhost:5221/api/client'; // Replace with your API endpoint
const API_COMMANDE = 'http://localhost:5221/api/commande'; // Replace with your API endpoint
const API_GESTIONCLIENT = 'http://localhost:5221/api/gestion/client'; // Replace with your API endpoint

// Produits API
export const getProducts = () => axios.get(API_PRODUCT);
export const getProductById = (id) => axios.get(`${API_PRODUCT}/${id}`);
export const createProduct = (product) => axios.post(API_PRODUCT, product);
export const updateProduct = (id, updatedProduct) =>
    axios.put(`${API_PRODUCT}/${id}`, updatedProduct);
export const deleteProduct = (id) => axios.delete(`${API_PRODUCT}/${id}`);

// Clients API
export const getClients = () => axios.get(API_CLIENT);
export const getClientById = (id) => axios.get(`${API_CLIENT}/${id}`);
export const createClient = (client) => axios.post(API_CLIENT, client);
export const updateClient = (id, updatedClient) =>
    axios.put(`${API_CLIENT}/${id}`, updatedClient);
export const deleteClient = (id) => axios.delete(`${API_CLIENT}/${id}`);

// Commandes API
export const getCommandes = () => axios.get(API_COMMANDE);
export const getCommandeById = (id) => axios.get(`${API_COMMANDE}/${id}`);
export const createCommande = (commande) => axios.post(API_COMMANDE, commande);
export const updateCommande = (id, updatedCommande) =>
    axios.put(`${API_COMMANDE}/${id}`, updatedCommande);
export const deleteCommande = (id) => axios.delete(`${API_COMMANDE}/${id}`);

// Gestion Client API
export const getGestionClients = () => axios.get(API_GESTIONCLIENT);

