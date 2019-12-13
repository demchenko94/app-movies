import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@app/store';
import { selectedMovies } from '@app/store/movies';
import { Observable, of } from 'rxjs';
import { Movie } from '@modules/core/models';

@Component({
  selector: 'app-selected-movies-page',
  templateUrl: './selected-movies-page.component.html',
  styleUrls: ['./selected-movies-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedMoviesPageComponent implements OnInit {
  movies$: Observable<Movie[]> = this.store.select(selectedMovies);
  constructor(private store: Store<AppState>) {}

  ngOnInit() {

  }
}
