import axios from 'axios';

export const fetchPromos = async () => {
  try {
    const res = await axios.get('http://localhost:3000/promos'); 
    return res.data; 
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
  }
}

export const buscaPromoPorLoja = async (loja) => {
  try {
    const res = await axios.get('http://localhost:3000/promos?loja=' + loja); 
    return res.data; 
  } catch (err) {
    console.error('Erro ao buscar dados:', err);
  }
}