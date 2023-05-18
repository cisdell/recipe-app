import { projectFirestore } from "../../firebase/config.js";
import { useEffect } from "react";
import "./Home.css";
//styles
import RecipeList from "../../components/RecipeList";
// import { useFetch } from "../../hooks/useFetch";
import React, { useState } from 'react';

export default function Home() {
  // const { data, isPending, error } = useFetch('http://localhost:3000/recipes');

  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setIsPending(true)
    projectFirestore.collection('recipes').get().then((snapshot) => {
      if (snapshot.empty) {
        setError('No Recipes to load')
        setIsPending(false)
      } else {
        let results = [];

        snapshot.docs.forEach(doc => {
          console.log(doc.data)
          results.push({id: doc.id, ...doc.data()})
          console.log(results)
        })
        setData(results)
        setIsPending(false)
      }
    }).catch(err => {
      setError(err.message)
      setIsPending(false)
    })

  }, []);

  return (
    <div className="home">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading..</p>}
      {data && <RecipeList recipes={data} />}
    </div>
  );
}
