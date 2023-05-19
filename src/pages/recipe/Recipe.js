import "./Recipe.css";
import React, { useEffect, useState } from "react";
import { projectFirestore } from "../../firebase/config.js";
// import {useEffect, useState} from 'react';
// import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

export default function Recipe() {
  const { id } = useParams();
  console.log(id);
  // const url = "http://localhost:3000/recipes/" + id;
  // const { data: recipe, isPending, error } = useFetch(url);
  const [recipe, setRecipe] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    setIsPending(true);

    const unsub = projectFirestore
      .collection("recipes")
      .doc(id)
      .onSnapshot((doc) => {
        if (doc.exists) {
          setIsPending(false);
          setRecipe(doc.data());
        } else {
          setIsPending(false);
          setError("Could not find that recipe");
        }
      });
    return () => unsub
  }, [id]);

  const handleClick = () => {
    projectFirestore.collection('recipes').doc(id).update({
      title: 't t t',


    })
  }

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page-title">{recipe.title}</h2>
          <p>Takes {recipe.cookingTime} to cook.</p>
          <ul>
            {recipe.ingredients.map((ing) => (
              <li key={ing}>{ing}</li>
            ))}
          </ul>
          <p className="method">{recipe.method}</p>
          <button onClick={handleClick}>Update Me</button>
        </>
      )}
    </div>
  );
}
