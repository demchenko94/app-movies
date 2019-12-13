import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, act } from '@ngrx/effects';

import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import {
  apiLoadMovies,
  apiLoadTrailers,
  loadMovies,
  loadSelectedMovies,
  loadTrailers,
  sessionStorageLoadSelectedMovies
} from './movies.actions';
import { MoviesService, TrailersService, SessionStorageService } from '@modules/core/services';

@Injectable()
export class MoviesEffects {
  constructor(
    private actions$: Actions,
    private moviesService: MoviesService,
    private trailersService: TrailersService,
    private sessionStorageService: SessionStorageService
  ) {}

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadMovies),
      mergeMap(() =>
        this.moviesService.getTopMovies().pipe(
          map(movies => apiLoadMovies({ movies })),
          catchError(() => of({ type: '[Movies API] Movies Loaded Error' }))
        )
      )
    )
  );
  loadTrailers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTrailers),
      mergeMap(() =>
        this.trailersService.getTrailers().pipe(
          map(trailers => apiLoadTrailers({ trailers })),
          catchError(() => of({ type: '[Movies MockData] Trailer Loaded Error' }))
        )
      )
    )
  );
  loadSelectedMoviesId$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadSelectedMovies),
      mergeMap(() =>
        this.sessionStorageService.getData('selectedMovies').pipe(
          map(selectedMovies => sessionStorageLoadSelectedMovies({ selectedMovies })),
          catchError(() => of({ type: '[Movies SessionStorage] Selected Movies Loaded Error' }))
        )
      )
    )
  );
}
