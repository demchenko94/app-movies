import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '@env/environment';

import { MoviesState, moviesReducer } from '@app/store/movies';

export interface AppState {
  movies: MoviesState;
}

export const reducers: ActionReducerMap<AppState> = {
  movies: moviesReducer
};

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
