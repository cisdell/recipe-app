import { Link } from "react-router-dom";
//styles
import "./Navbar.css";
import Searchbar from './Searchbar';

import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className='brand'>
          <h1>The Thomas Keller Shop</h1>
        </Link>
        <Searchbar/>
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
