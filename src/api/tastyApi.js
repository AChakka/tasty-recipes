import axios from 'axios';

const tastyApi = axios.create({
  baseURL: 'https://tasty.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': '3f9a8179e3msh9af5dfd2d4a1521p1a275bjsn26410302489e',
    'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
  }
});

export const searchRecipes = async (query) => {
  try {
    const response = await tastyApi.get('/recipes/list', {
      params: { from: '0', size: '20', q: query }
    });
    return response.data.results;
  } catch (error) {
    console.error('Error searching recipes:', error);
    return [];
  }
};

export const getRecipeDetails = async (id) => {
  try {
    const response = await tastyApi.get(`/recipes/get-more-info`, {
      params: { id }
    });
    return response.data;
  } catch (error) {
    console.error('Error getting recipe details:', error);
    return null;
  }
};