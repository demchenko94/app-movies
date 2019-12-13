import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@app/store';
import {isLoading, loadMovies, loadTrailers} from '@app/store/movies';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'app-movies';
  constructor(private store: Store<AppState>) {}
  isLoading$: Observable<boolean> = this.store.select(isLoading);

  ngOnInit(): void {
    this.store.dispatch(loadMovies());
    this.store.dispatch(loadTrailers());
  }
}
