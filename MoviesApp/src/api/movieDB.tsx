import axios from 'axios';

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: 'e953a4ffc163fb236e68cb1431cd8f33',
    language: 'es-ES',
  },
});

export default movieDB;
