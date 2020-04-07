import axios from 'axios';

const KEY = '66574a98b78cfb7ae35c861695d0d9c0';
const BASE_URL = 'https://api.themoviedb.org/3/';

export const getFilmsInTrends = () =>
  axios.get(BASE_URL + `trending/all/day?api_key=${KEY}`);

export const getFilmWithId = id =>
  axios.get(BASE_URL + `movie/${id}?api_key=${KEY}`);

export const getFilmsByQuery = queryString =>
  axios.get(
    BASE_URL +
      `search/movie?api_key=${KEY}&language=en-US&query=${queryString}&page=1&include_adult=false`,
  );

export const getFilmCastById = id =>
  axios.get(BASE_URL + `movie/${id}/credits?api_key=${KEY}`);

export const getFilmReviewsById = id =>
  axios.get(
    BASE_URL + `movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`,
  );
