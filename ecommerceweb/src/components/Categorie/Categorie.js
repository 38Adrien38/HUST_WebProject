import React from 'react';
import './Categorie.css';

function Categorie({ setPage, setSelectedCategory }) {
    const categories = [
        { name: "Furnitures", image: "./images/Furnitures.jpg" },
        { name: "Sport", image: "./images/Sport.jpg" },
        { name: "Clothes", image: "./images/Clothes.jpg" },
        { name: "Mobiles", image: "./images/Mobiles.jpg" },
        { name: "Computer", image: "./images/Computer.jpg" },
        { name: "Beauty", image: "./images/Beauty.jpg" },
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
