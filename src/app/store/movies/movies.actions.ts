import { createAction, props } from '@ngrx/store';

import { Movie } from '@modules/core/models';
import { Trailer } from '@modules/core/models/trailer';

export const apiLoadMovies = createAction('[Movies API] Movies Loaded Success', props<{ movies: Movie[] }>());
export const apiLoadTrailers = createAction('[Movies API] Trailers Loaded Success', props<{ trailers: Trailer[] }>());

export const sessionStorageLoadSelectedMovies = createAction(
         '[Movies SessionStorage] Selected Movies Loaded Success',
         props<{ selectedMovies: string[] }>());

export const loadMovies = createAction('[Movies] Load Movies');
export const loadTrailers = createAction('[Movies] Load Trailers');
export const loadSelectedMovies = createAction('[Movies] Load SelectedMovies');


export const selectMovie = createAction('[Movies] Select Movie', props<{ movieId: string }>());
