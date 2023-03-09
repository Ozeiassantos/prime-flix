import axios from 'axios';
// Url Api:  https://api.themoviedb.org/3//movie/now_playing?api_key=defc5dcefcf2cd8361f28bec19114320&language=pt-BR

// Base da URL: https://api.themoviedb.org/3/

const api = axios.create({
    baseURL:'https://api.themoviedb.org/3/'
});

export default api;