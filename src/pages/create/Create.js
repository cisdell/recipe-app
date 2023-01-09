import { useState, useRef, useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import "./Create.css";
import React from "react";
import {useNavigate, Route} from "react-router-dom";

export default function Create() {
  const [title, setTitle] = useState("");
  const [method, setMethod] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [newIngredient, setNetIngredient] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const ingredientInput = useRef(null);
  const navigate = useNavigate();

  const { postData, data, error } = useFetch(
    "http://localhost:3000/recipes",
    "POST"
  );
  // console.log(postData)

  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(title, method, cookingTime, ingredients);
    postData({
      title,
      ingredients,
      method,
      cookingTime: cookingTime + " minutes",
    });
    // setTitle("");
    // setMethod("");
    // setCookingTime("")
    // setNetIngredient("")
    console.log("new cooking recipe added");
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const ing = newIngredient.trim();

    if (ing && !ingredients.includes(ing)) {
      setIngredients((prevIngs) => [...prevIngs, ing]);
    }
    setNetIngredient("");
    ingredientInput.current.focus();
  };
  //redirect the user when we get a response

  useEffect(()=> {
    if (data) {
      navigate("/")
    }
  }, [data])

  return (
    <div className="create">
      <h2 className="page-title">Add a New Recipe</h2>

      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe title:</span>
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            required
          />
        </label>
        <label>
          <span>Recipe ingredients:</span>
          <div className="ingredients">
            <input
              type="text"
              onChange={(e) => setNetIngredient(e.target.value)}
              value={newIngredient}
              ref={ingredientInput}
            />
            <button onClick={handleAdd} className="btn">
              add
            </button>
          </div>
        </label>
        <p>
          Current ingredients:{" "}
          {ingredients.map((i) => (
            <em key={i}>{i}, </em>
          ))}
        </p>

        <label>
          <span>Recipe method:</span>
          <textarea
            onChange={(e) => setMethod(e.target.value)}
            value={method}
          />
        </label>
        {/* incredients go here */}
        <label>
          <span>Cooking time (minutes):</span>
          <input
            type="number"
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            required
          />
        </label>

        <button className="btn">Submit</button>
      </form>
    </div>
  );
}
