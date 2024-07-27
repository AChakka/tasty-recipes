import axios from 'axios';

const options = {
  method: 'GET',
  url: 'https://tasty.p.rapidapi.com/recipes/list',
  params: {
    from: '0',
    size: '20',
    tags: 'under_30_minutes'
  },
  headers: {
    'x-rapidapi-key': '3f9a8179e3msh9af5dfd2d4a1521p1a275bjsn26410302489e',
    'x-rapidapi-host': 'tasty.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}