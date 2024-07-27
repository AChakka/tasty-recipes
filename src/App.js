import React, { useState, useEffect } from 'react';
import { fetchRecipes } from './api'; 

function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRecipes = async () => {
      try {
        const data = await fetchRecipes();
        setRecipes(data.results); // Adjust based on Tasty API response structure
        setLoading(false);
      } catch (error) {
        console.error('Error loading recipes:', error);
        setLoading(false);
      }
    };

    loadRecipes();
  }, []);

  return (
    <div className="App">
      <h1>Recipe App</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>{recipe.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;