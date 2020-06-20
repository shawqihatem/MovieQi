import Axios from 'axios';

const API_KEY = '39d553e82cbcfb44921a40cab63fa25b';

const getItems = async (itemsType, listType, setItems, page, setTotalPages) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/${itemsType}/${listType}?api_key=${API_KEY}&language=en-US&page=${page}`
  );

  let items = data.data.results;
  let totalPages = data.data.total_pages;

  setTotalPages(totalPages);

  setItems(items);
  return items;
};

const getItem = async (id, setItem) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  let item = data.data;
  setItem(item);
  return item;
};

const getVideo = async (id, setVideos) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
  );
  let videos = data.data.results;
  setVideos(videos);
  return videos;
};

const getCasts = async (id, setCasts) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  let casts = data.data.cast;
  setCasts(casts);
  return casts;
};

const getRecommended = async (id, setRecommended) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${API_KEY}&language=en-US&page=1`
  );
  let recommendations = data.data.results;
  setRecommended(recommendations);
  return recommendations;
};

const searchItems = async (
  itemsType,
  searchQuery,
  setItems,
  page,
  setTotalPages
) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/search/${itemsType}?api_key=${API_KEY}&page=${page}&query=${searchQuery}`
  );
  let items = data.data.results;
  let totalPages = data.data.total_pages;

  setTotalPages(totalPages);
  setItems(items);
  return items;
};

const getPerson = async (id, setPerson) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`
  );

  const person = data.data;
  setPerson(person);
  return person;
};

const getPersonImages = async (id, setImages) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/person/${id}/images?api_key=${API_KEY}`
  );

  const images = data.data.profiles;
  setImages(images);
  return images;
};

const getMovieCredits = async (id, setCreditsMovies) => {
  const data = await Axios.get(
    `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`
  );

  const creditsMovies = data.data.cast;
  setCreditsMovies(creditsMovies);
  return creditsMovies;
};

export {
  getItems,
  getItem,
  getVideo,
  getCasts,
  getRecommended,
  searchItems,
  getPerson,
  getPersonImages,
  getMovieCredits,
};
