import React, { useState } from 'react';


function CategorieDropdown({ setPage, setSelectedCategory }) {
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
        setSelectedCategory(categoryName);
        setPage('produitCategorie');
        setIsOpen(false); // close dropdown after click
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
