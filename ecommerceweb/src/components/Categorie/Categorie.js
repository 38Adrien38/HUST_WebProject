import React from 'react';
import './Categorie.css';

function Categorie({ setPage, setSelectedCategory }) {
    const categories = [
        { name: "Furnitures", image: "./carrefour.jpg" },
        { name: "Sport", image: "./carrefour.jpg" },
        { name: "Clothes", image: "./carrefour.jpg" },
        { name: "Mobiles", image: "./carrefour.jpg" },
        { name: "Computer", image: "./carrefour.jpg" },
        { name: "Beauty", image: "./carrefour.jpg" },
    ];

    const handleClick = (categoryName) => {
        setSelectedCategory(categoryName);
        setPage('produitCategorie');
    };

    return (
        <div className="categorie-container">
            <h2>Categories</h2>
            <div className="categorie-grid">
                {categories.map((category) => (
                    <div
                        key={category.name}
                        className="categorie-card"
                        onClick={() => handleClick(category.name)}
                    >
                        <img
                            src={category.image}
                            alt={category.name}
                            className="categorie-image"
                        />
                        <p>{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Categorie;
