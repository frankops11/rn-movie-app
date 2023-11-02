import axios from 'axios/index';

const MovieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '08142d9351171e224683a4c8cfe1c85f',
    language: 'en-US',
  },
});

export default MovieDB;
