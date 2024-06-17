import axios from 'axios';


const apiKey = '78126375524b4726886701ff2c64205b'; 
const baseUrl = 'https://newsapi.org/v2';

export const fetchNews = async (query) => {
  try {
    const response = await axios.get(`${baseUrl}/everything`, {
      params: {
        q: query, // Query para buscar notícias
        apiKey: apiKey,
      },
    });
    return response.data.articles;
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
    return []; 
  }
};
