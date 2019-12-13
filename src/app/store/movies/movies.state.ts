import { Movie } from '@modules/core/models';
import { Trailer } from '@modules/core/models/trailer';

export interface MoviesState {
  movies: Movie[];
  trailers: Trailer[];
  selectedMovies: string[];
  isLoading: boolean;
}
