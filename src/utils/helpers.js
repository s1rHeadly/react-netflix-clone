export const BASE_API_URL= 'https://api.themoviedb.org/3/';
export const POSTER_URL = 'https://image.tmdb.org/t/p/original';

export const truncate = (str, n) => {
  return str?.length > n ? str.substr(0, n - 1) + " ..." : str;
}