import React, { useState } from 'react';
import './CategorieDropdown.css'; // Import your CSS file for styling

function CategorieDropdown({ setPage, setId }) {
    const [isOpen, setIsOpen] = useState(false);

    const categories = [
        { name: "Furnitures", image: "./carrefour.jpg" },
        { name: "Sport", image: "./carrefour.jpg" },
        { name: "Clothes", image: "./carrefour.jpg" },
        { name: "Mobiles", image: "./carrefour.jpg" },
        { name: "Computer", image: "./carrefour.jpg" },
        { name: "Beauty", image: "./carrefour.jpg" },
    ];

    const handleClick = (categoryName) => {
        setId(categoryName); // sets the category name as ID
        setPage('produitCategorie'); // go to category product page
        setIsOpen(false); // close the dropdown
    };

    return (
        <div
            className="categorie-dropdown"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <p className="categorie-dropdown-button">Catégorie</p>
            {isOpen && (
                <div className="categorie-dropdown-menu">
                    {categories.map((category) => (
                        <div
                            key={category.name}
                            className="categorie-dropdown-item"
                            onClick={() => handleClick(category.name)}
                        >
                            <span>{category.name}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default CategorieDropdown;
