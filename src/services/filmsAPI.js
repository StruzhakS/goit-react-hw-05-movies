import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const API_KEY = '67e274d1fc019a41278ac5b722389c7a';

export async function getPopularFilms() {
  const { data } = await axios('/trending/movie/day', {
    params: { api_key: API_KEY },
  });
  return data;
}

export async function getSearchedFilm(search) {
  const { data } = await axios('/search/movie', {
    params: { api_key: API_KEY, query: search },
  });
  return data;
}

export async function getFilmDetails(id) {
  const { data } = await axios(`movie/${id}`, {
    params: { api_key: API_KEY },
  });
  return data;
}

export async function getCredits(id) {
  const { data } = await axios(`movie/${id}/credits`, {
    params: { api_key: API_KEY },
  });
  return data;
}

export async function getReviews(id) {
  const { data } = await axios(`movie/${id}/reviews`, {
    params: { api_key: API_KEY },
  });
  return data;
}
