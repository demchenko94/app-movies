import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '@modules/core/models';

import { Store } from '@ngrx/store';
import { AppState } from '@app/store';

import { movies } from '@app/store/movies';

@Component({
  selector: 'app-top-movies-page',
  templateUrl: './top-movies-page.component.html',
  styleUrls: ['./top-movies-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopMoviesPageComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(movies);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
