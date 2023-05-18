import "./RecipeList.css";
import { projectFirestore } from "../firebase/config.js";
// import React from "react";
import { Link } from "react-router-dom";
import trashcan from "../assets/trashcan.svg";

function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <div className="error">No recipes to load...</div>;
  }
  const handleClick = (id) => {
    projectFirestore.collection("recipes").doc(id).delete();

  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make</p>
          <div>{recipe.method.substring(0, 100)}...</div>
          <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
          <img
            className="delete"
            src={trashcan}
            onClick={() => handleClick(recipe.id)}
          />
        </div>
      ))}
    </div>
  );
}

export default RecipeList;
