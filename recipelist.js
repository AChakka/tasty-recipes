import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { searchRecipes } from '../api/tastyApi';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (query) {
      searchRecipes(query).then(setRecipes);
    }
  }, [query]);

  return (
    <div>
      <h1>Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search recipes..."
      />
      <ul>
        {recipes.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipe/${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeList;