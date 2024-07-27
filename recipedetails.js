import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getRecipeDetails } from '../api/tastyApi';

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRecipeDetails(id).then(setRecipe);
  }, [id]);

  if (!recipe) return <div>Loading...</div>;

  return (
    <div>
      <h1>{recipe.name}</h1>
      <img src={recipe.thumbnail_url} alt={recipe.name} />
      <h2>Ingredients:</h2>
      <ul>
        {recipe.sections[0].components.map((component, index) => (
          <li key={index}>{component.raw_text}</li>
        ))}
      </ul>
      <h2>Instructions:</h2>
      <ol>
        {recipe.instructions.map((instruction, index) => (
          <li key={index}>{instruction.display_text}</li>
        ))}
      </ol>
    </div>
  );
};

export default RecipeDetails;