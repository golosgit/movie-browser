export const apiKey = "?api_key=0c892602e65add75a8a7cd1b2e400fe6";
export const popularMovies = "https://api.themoviedb.org/3/movie/popular";
export const imageUrl = "https://image.tmdb.org/t/p/";
export const image = {
  moviePoster: "w500",
}

export const getMovieList = async () => {
  const response = await fetch(`${popularMovies}${apiKey}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
};