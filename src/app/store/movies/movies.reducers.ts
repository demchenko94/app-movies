import { MoviesState } from '@app/store/movies/movies.state';
import { Action, createReducer, on } from '@ngrx/store';
import {
  apiLoadMovies,
  apiLoadTrailers,
  loadMovies, loadTrailers,
  selectMovie,
  sessionStorageLoadSelectedMovies
} from '@app/store/movies/movies.actions';

const initialState: MoviesState = {
  movies: [],
  trailers: [],
  isLoading: false,
  selectedMovies: []
};

const reducer = createReducer(
  initialState,
  on(loadMovies, state => ({
    ...state,
    isLoading: true
  })),
  on(loadTrailers, state => ({
    ...state,
    isLoading: true
  })),
  on(apiLoadMovies, (state, { movies }) => ({
    ...state,
    isLoading: false,
    movies: [...movies]
  })),
  on(apiLoadTrailers, (state, { trailers }) => ({
    ...state,
    isLoading: false,
    trailers: [...trailers]
  })),
  on(selectMovie, (state, { movieId }) => {
    const selectedMovies = state.selectedMovies.includes(movieId)
      ? state.selectedMovies.filter(i => i !== movieId)
      : [...state.selectedMovies, movieId];

    sessionStorage.setItem('selectedMovies', JSON.stringify(selectedMovies));

    return {
      ...state,
      selectedMovies: [...selectedMovies]
    };
  }),
  on(sessionStorageLoadSelectedMovies, (state, { selectedMovies }) => ({
    ...state,
    selectedMovies: [...selectedMovies]
  }))
);

export function moviesReducer(state: MoviesState | undefined, action: Action) {
  return reducer(state, action);
}
