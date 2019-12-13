import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '@env/environment';
import { Store } from '@ngrx/store';
import { isLoading, loadSelectedMovies, selectMovie } from '@app/store/movies';
import { AppState } from '@app/store';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {
  @Input() movies$;
  isLoading$: Observable<boolean> = this.store.select(isLoading);
  apiDirectorUrl = environment.api.urlDirector;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(loadSelectedMovies());
  }

  selectMovie(idIMDB) {
    this.store.dispatch(selectMovie({ movieId: idIMDB }));
  }
}
