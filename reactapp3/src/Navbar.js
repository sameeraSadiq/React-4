// src/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav>
            <h1><Link to="/">Blog Application</Link></h1>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/create">Create Post</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;