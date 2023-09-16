import axios from 'axios';
// f4872214e631fc876cb43e6e30b7e731

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

export default instance;
