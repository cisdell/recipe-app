import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import React from "react";
import {useTheme} from '../hooks/useTheme'
//styles
import "./Navbar.css";
import Searchbar from "./Searchbar";

export default function Navbar() {
  // const { color } = useContext(ThemeContext);
  // console.log(color)
  const {color} = useTheme();

  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>The Thomas Keller Shop</h1>
        </Link>
        <Searchbar />
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  );
}
