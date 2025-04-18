import React from 'react';
import './NavLink.css';
function NavLink({ onClick, link, text }) {
    return (
        <p onClick={onClick} className="navlink">{text}</p>
    );
}
export default NavLink; 